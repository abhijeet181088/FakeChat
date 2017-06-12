var displayPicUrl = 'http://p.imgci.com/db/PICTURES/CMS/128400/128483.jpg';
var sDisplayName = 'Sachin Tendulkar';
var sMsg = 'Aaila, mujhe kisne add kiya idhar!!';
var dMsgTime = '22:11';
var sLeftMsgGroup = '<div class="msg msg-group"><span></span><div class="avatar icon-user-default" style="height: 40px; width: 40px; cursor: pointer; float: left; margin-right: 10px"><div class="avatar-body"><img src="' + displayPicUrl + '" draggable="false" class="avatar-image is-loaded"></div></div><div class="message message-chat message-in tail message-chat"><div><span class="tail-container"></span><span class="tail-container highlight"></span><div class="bubble bubble-text has-author"><h3 class="message-author color-18"><span class="hidden-token multi-token"><span class="number text-clickable">' + sDisplayName + '</span><span class="ellipsify screen-name text-clickable"><span class="screen-name-text" dir="auto"></span></h3><div class="message-text"><span class="message-pre-text">:&nbsp;⁠⁠⁠</span><span class="emojitext selectable-text" dir="ltr">' + sMsg + '</span></div><div class="message-meta"><span class="hidden-token"><span class="message-datetime">' + dMsgTime + '</span></span></div></div><span></span></div></div></div>';

var displayPicUrl2 = 'http://punjabnewsexpress.com/images/article/article46488.jpg';
var sMsg2 = 'Kaise ho Sachin paji?';
var dMsgTime2 = "22:12";
var sRightMsgGroup = '<div class="msg msg-group"><span></span><div class="avatar icon-user-default" style="height: 40px; width: 40px; cursor: pointer;"><div class="avatar-body"><img src="' + displayPicUrl2 + '" draggable="false" class="avatar-image is-loaded"></div></div><div class="message message-chat message-out tail message-chat"><div><span class="tail-container"></span><span class="tail-container highlight"></span><div class="bubble bubble-text"><div class="message-text"><span class="message-pre-text"></span><span class="emojitext selectable-text" dir="ltr">' + sMsg2 + '</span></div><div class="message-meta text-clickable"><span class="hidden-token"><span class="message-datetime">' + dMsgTime2 + '</span></span><span class="icon icon-msg-check"></span></div></div><span></span></div></div></div>';	

var i =0, sMsgGroup = '';	
$( document ).ready(function() {
	setInterval(function(){
		sMsgGroup = i%2 === 0 ? sRightMsgGroup : sLeftMsgGroup;
		$(".message-list").append(sMsgGroup);
		$(".pane-chat-body").animate({scrollTop: $(".pane-chat-body").prop("scrollHeight")}, 0);
		i++;
	}, 2000);
});	