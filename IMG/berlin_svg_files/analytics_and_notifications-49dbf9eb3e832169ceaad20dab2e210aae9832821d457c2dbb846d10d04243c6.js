const user=window.__user||{},browser=window.__browser||{};user.anon||browser.mobile||!window.Appcues||window.Appcues.identify(__user.id,{createdAt:__user.created_at,email_verified:__user.email_verified,pro:__user.paid,proTier:__user.tier,accountId:__user.id,currentTeam:__user.current_team_id,currentTeamHashId:__user.current_team_hashid,collectionsCount:__user.collections_count,collectionsPrivateCount:__user.collections_private_count,followers_count:__user.followers_count,followings_count:__user.followings_count,pensCount:__user.pens_count,pensPrivateCount:__user.pens_private_count,projectsCount:__user.projects_count,projectsPrivateCount:__user.projects_private_count}),window.reportError=((e,r={})=>{console.error({error:e,data:r})});