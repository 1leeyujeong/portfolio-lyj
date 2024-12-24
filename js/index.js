$(function () {
    // header 스크롤위치에 따라 스크롤이벤트
    $(window).scroll(function () {
        var pageY = $(window).scrollTop();
        // 현재 스크롤값 확인
        console.log(pageY);
        if (pageY >= 400 && pageY <= 800) {
            $('header').addClass('header_bg_active');
            $('.logo').addClass('color_white_active');
            $('.hover-effect').addClass('color_white_active');
        }

        else if (pageY <= 80) {
            $('header').removeClass('header_bg_active');
            $('.logo').removeClass('color_white_active');
            $('.hover-effect').removeClass('color_white_active');
        }
    })

    // 1.cover 페이지로드 이벤트 타이틀
    $(document).ready(function () {
        setTimeout(function () {
            $('.cover_title1').css({ left: '0', opacity: '1' });
        }, 500); // Wait 0.5 seconds before the first animation

        setTimeout(function () {
            $('.cover_title2').css({ left: '0', opacity: '1' });
        }, 1000); // Wait 1 second before the second animation

        setTimeout(function () {
            $('.cover_title3').css({ left: '0', opacity: '1' });
        }, 1500); // Wait 1.5 seconds before the third animation

        setTimeout(function () {
            $('.cover_title4').css({ left: '0', opacity: '1' });
        }, 2000); // Wait 2 seconds before the fourth animation

        setTimeout(function () {
            $('#cover_memo').css({ transform: 'translateY(0)', opacity: '1' });
        }, 2200); // Wait 2 seconds before the fourth animation
    });


    // 스크롤위치에 따라 스크롤이벤트
    document.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY; 
        const target1 = document.querySelector(".about_title");
        const target2 = document.querySelector(".skill_title");
        const target3 = document.querySelector(".portfolio_title");

        if (scrollPosition >= 400) {
            target1.classList.add("visible");
        }

        else if (scrollPosition >= 100) {
            target1.classList.remove("visible");
        }

        if (scrollPosition >= 1300) {
            target2.classList.add("visible");
        }

        else if (scrollPosition >= 1000) {
            target2.classList.remove("visible");
        }

        if (scrollPosition >= 2300) {
            target3.classList.add("visible");
        }

        else if (scrollPosition >= 1000) {
            target3.classList.remove("visible");
        }

    });


    // 4.포트폴리오 - 탭메뉴
    $('#portfolio_tap_menu>ul>li').click(function () {
        $(this).addClass("tap_active")
            .siblings()
            .removeClass("tap_active");
        return false;
    });


    // 4.포트폴리오 - 개별프로젝트 상세보기 modal
//     $(function () {
//         // web 프로젝트
//         $('#web_btn1').on('click', function () {
//             $('#web_project_modal1').fadeIn();
//             $('#web_modal_close').on('click', function () {
//                 $('#web_project_modal1').fadeOut();
//             })
//         })

//         // edit 프로젝트
//         $('#book1').on('click', function () {
//             $('#edit_project_modal1').fadeIn();
//             $('#edit_modal_close').on('click', function () {
//                 $('#edit_project_modal1').fadeOut();
//             })
//         })
//     });
});

// 3.스킬 - 카드 뒤집기
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

card1.addEventListener('click', () => {
    card1.classList.toggle('flipped'); // 클래스 추가/제거
});
card2.addEventListener('click', () => {
    card2.classList.toggle('flipped'); // 클래스 추가/제거
});
card3.addEventListener('click', () => {
    card3.classList.toggle('flipped'); // 클래스 추가/제거
});