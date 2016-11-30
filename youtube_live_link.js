function getYoutubeLiveURL() {
    // Get the watch id from the dataset in 'metadata-app'
    elems = document.getElementsByClassName('metadata-app hid');
    if(elems.length == 0) {
        alert("Unable to find any metadata-app class; can't extract the stream URL");
        return;
    }

    var metadata_app = elems[0];
    return(metadata_app.dataset.videoId); // 'data-video-id'
}

function insertYoutubeLiveURL(url) {
    // Insert the link into the dashboard to the right of the stream status
    elems = document.getElementsByClassName('live-dashboard-status-message main-message strong-text');
    if(elems.length == 0) {
        alert("Unable to find any dashboard class; can't insert the stream URL");
        return;
    }

    var div_status = elems[0];
    div_status.innerHTML += '<br/>' + '(Live URL: <a href="' + url + '">' + url + '</a>)';
}

var video_id = getYoutubeLiveURL();
if(video_id) {
    var video_url = 'https://www.youtube.com/watch?v=' + video_id;
    insertYoutubeLiveURL(video_url);
} else {
    alert("Unable to find the Live URL!");
}
