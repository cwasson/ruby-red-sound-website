                    $(document).ready(function() {
                        $(document).on ("click", "#contact-video", function() {
                            $("#yt-vid")[0].src += "&autoplay=1";
                            $("#makedisplay-video").fadeIn();
                            $("#controls-vid").fadeIn();
                            $("#img1").fadeOut();
                            $("#img2").fadeOut();
                            $("#img3").fadeOut();
                            $("#img4").fadeOut();
                            $("#img5").fadeOut();
                            $("#img6").fadeOut();
                            $("#img7").fadeOut();
                            $("#img8").fadeOut();
                            $("#img9").fadeOut();
                            $("#img10").fadeOut();
                            $("#img11").fadeOut();
                            $("#img14").fadeOut();
                            $("#img15").fadeOut();
                            $("#img16").fadeOut();
                            $("#img17").fadeOut();
                            $("#img18").fadeOut();
                            $("#img19").fadeOut();
                            $("#sbac-real").fadeOut()
                            $("#hisf-real").fadeOut();
                            $("#makedisplaypls-1").fadeOut();
                            $("#controls-1").fadeOut();
                            $("#cover-1").fadeOut();
                            $("#arrows-1").fadeOut();
                            $("#makedisplaypls-2").fadeOut();
                            $("#controls-2").fadeOut();
                            $("#cover-2").fadeOut();
                            $("#arrows-2").fadeOut();
                            $("#makedisplaypls-3").fadeOut();
                            $("#controls-3").fadeOut();
                            $("#cover-3").fadeOut();
                            $("#arrows-3").fadeOut();
                            document.getElementById('player').pause();
                            $('#makedisplay-video').find('iframe').attr('src','https://www.youtube.com/embed/SDvFPG7fNOk?enablejsapi=1&version=3&playerapiid=ytplayer');

                        });
                    });
                    $(document).ready(function() {
                        $('#contact-video').on('click', function(ev) {
 
                        $("#yt-vid")[0].src += "&autoplay=1";
                        ev.preventDefault();
                    });
                    });
                    $(document).ready(function() {
                        $(document).on ("click", "#controls-vid", function() {
                            $("#makedisplay-video").fadeOut();
                            $("#controls-vid").fadeOut();
                            $("#img1").fadeIn();
                            $("#img2").fadeIn();
                            $("#img3").fadeIn();
                            $("#img4").fadeIn();
                            $("#img5").fadeIn();
                            $("#img6").fadeIn();
                            $("#img7").fadeIn();
                            $("#img8").fadeIn();
                            $("#img9").fadeIn();
                            $("#img10").fadeIn();
                            $("#img11").fadeIn();
                            $("#img14").fadeIn();
                            $("#img15").fadeIn();
                            $("#img16").fadeIn();
                            $("#img17").fadeIn();
                            $("#img18").fadeIn();
                            $("#img19").fadeIn();
                            $("#sbac-real").fadeIn();
                            $("#hisf-real").fadeIn();
                            $("#vid-bg").fadeOut();
                            $('#makedisplay-video').find('iframe').attr('src','');
                        });
                    });
                    $(document).ready(function() {
                        var playing = false;
                        $(document).on ("click", "#contact-video", function() {
                            if (playing == true) {
                                document.getElementById('player').play();
                                playing = false;
                            }
                    });
