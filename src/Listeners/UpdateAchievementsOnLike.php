<?php

/*
 * This file is part of malago/achievements
 *
 *  Copyright (c) 2021 Miguel A. Lago
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Malago\Achievements\Listeners;

use Malago\Achievements\AchievementCalculator;
use Flarum\Likes\Event\PostWasLiked;
use Flarum\Likes\Event\PostWasUnliked;
use Flarum\Post\Post;
use Flarum\Post\CommentPost;
use Flarum\Discussion\Discussion;
use Illuminate\Database\Eloquent\Model;

class UpdateAchievementsOnLike
{
    protected $calculator;

    public function __construct(AchievementCalculator $calculator)
    {
        $this->calculator = $calculator;
    }

    public function extensionDependencies(): array
    {
        return ['flarum-likes'];
    }

    public function handle(PostWasLiked $event)
    {

        $arr = array(
            array(
                "type"=>"likes",
                "count"=>$event->actor->join('post_likes', 'users.id', '=', 'post_likes.user_id')->count(),
                "user"=>$event->actor,
                "new"=>0,
            ),
            array(
                "type"=>"selflikes",
                "count"=>CommentPost::where('user_id', $event->post->user_id)->select('id')->withCount('likes')->get()->sum('likes_count'),
                "user"=>$event->post->user,
                "new"=>1,
            ),
        );

        // app('log')->error("LIKES RECIBIDOS: ".print_r($arr[1]["count"],TRUE));



        $event->actor["new_achievements"] = $this->calculator->recalculate($event->actor,$arr);

    }
}