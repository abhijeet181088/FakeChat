var sMsgGroupArr = [];

$(document).ready(function () {
	$("#add-header").click(function () {
		$("#GroupName").text($("#AddGroupName").val());
		$("#GroupMembers").text($("#AddGroupMembers").val());
		$('#GroupPicUrl').attr("src",$("#AddGroupPicUrl").val());
	});

	$("#add-message").click(function (oEvent) {
		// var displayPicUrl = 'http://p.imgci.com/db/PICTURES/CMS/128400/128483.jpg';
		var displayPicUrl = $("#DisplayPicUrl").val();
		var sDisplayName = $("#DisplayName").val();
		var sMsg = $("#DisplayMessage").val();
		var dMsgTime = $("#DisplayDate").val();
		if (!dMsgTime || dMsgTime === "") {
			var d = new Date();
			var dMinutes = d.getMinutes() < 10 ? ("0" + d.getMinutes()) : d.getMinutes();
			dMsgTime = d.getHours() + ":" + dMinutes;
		}
		var isReceiver = $("#msg-receiver").is(":checked");
		var sRightMsgGroup = '<div class="msg msg-group"><span></span><div class="avatar icon-user-default" style="height: 40px; width: 40px; cursor: pointer;"><div class="avatar-body"><img src="' + displayPicUrl + '" draggable="false" class="avatar-image is-loaded"></div></div><div class="message message-chat message-out tail message-chat"><div><span class="tail-container"></span><span class="tail-container highlight"></span><div class="bubble bubble-text"><div class="message-text"><span class="message-pre-text"></span><span class="emojitext selectable-text" dir="ltr">' + sMsg + '</span></div><div class="message-meta text-clickable"><span class="hidden-token"><span class="message-datetime">' + dMsgTime + '</span></span><span class="icon icon-msg-check"></span></div></div><span></span></div></div></div>';
		var sLeftMsgGroup = '<div class="msg msg-group"><span></span><div class="avatar icon-user-default" style="height: 40px; width: 40px; cursor: pointer; float: left; margin-right: 10px"><div class="avatar-body"><img src="' + displayPicUrl + '" draggable="false" class="avatar-image is-loaded"></div></div><div class="message message-chat message-in tail message-chat"><div><span class="tail-container"></span><span class="tail-container highlight"></span><div class="bubble bubble-text has-author"><h3 class="message-author color-18"><span class="hidden-token multi-token"><span class="number text-clickable">' + sDisplayName + '</span><span class="ellipsify screen-name text-clickable"><span class="screen-name-text" dir="auto"></span></h3><div class="message-text"><span class="message-pre-text">:&nbsp;⁠⁠⁠</span><span class="emojitext selectable-text" dir="ltr">' + sMsg + '</span></div><div class="message-meta"><span class="hidden-token"><span class="message-datetime">' + dMsgTime + '</span></span></div></div><span></span></div></div></div>';
		var sMsgGroup = isReceiver === true ? sLeftMsgGroup : sRightMsgGroup;
		
		sMsgGroupArr.push(sMsgGroup);
	});

	$("#RunVideo").click(function(){
		var timeOut = 2000;
		sMsgGroupArr.forEach(function(sMsgGroup){
			setTimeout(function(){
				$(".message-list").append(sMsgGroup);
			}, timeOut);
			timeOut += 2000;
		});
	});
});

