$(function () {
    // header 스크롤이벤트
    $(window).scroll(function () {
        var pageY = $(window).scrollTop();
        // 현재 스크롤값 확인
        console.log(pageY);
        if (pageY >= 400 && pageY <= 800) {
            $('header').addClass('header_bg_active');
            $('.logo').addClass('color_white_active');
            $('.nav_hover-effect').addClass('color_white_active');
        }

        else if (pageY <= 80) {
            $('header').removeClass('header_bg_active');
            $('.logo').removeClass('color_white_active');
            $('.nav_hover-effect').removeClass('color_white_active');
        }
    })


    // 모든 섹션과 메뉴 항목 가져오기
    // const sections = document.querySelectorAll(".section");
    // const navLinks = document.querySelectorAll(".nav-link");

    // 스크롤 이벤트 리스너 추가
    // window.addEventListener("scroll", () => {
    //     let current = "";

        // 현재 스크롤 위치에서 활성화할 섹션 찾기
        // sections.forEach((section) => {
        //     const sectionTop = section.offsetTop - 50; // 약간의 오차를 고려
        //     const sectionHeight = section.offsetHeight;

        //     if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        //         current = section.getAttribute("id");
        //     }
        // });

        // 활성화된 섹션에 맞는 메뉴 항목 업데이트
    //     navLinks.forEach((link) => {
    //         link.classList.remove("active");
    //         if (link.getAttribute("href").includes(current)) {
    //             link.classList.add("active");
    //         }
    //     });
    // });



    // 1.cover 페이지로드 이벤트 타이틀
    $(document).ready(function () {
        setTimeout(function () {
            $('.cover_title2').css({ left: '0', opacity: '1' });
        }, 500); // Wait 1 second before the second animation

        setTimeout(function () {
            $('.cover_title3').css({ left: '0', opacity: '1' });
        }, 1000); // Wait 1.5 seconds before the third animation

        setTimeout(function () {
            $('.cover_title4').css({ left: '0', opacity: '1' });
        }, 1500); // Wait 2 seconds before the fourth animation

        setTimeout(function () {
            $('#cover_memo').css({ transform: 'translate(0, 0)', opacity: '1' });
        }, 1800); // Wait 2 seconds before the fourth animation
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

// 4.포트폴리오 - 탭
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    });
});

// 4.포트폴리오 - Swiper1
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 4.포트폴리오 - Swiper2
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 4.portfolio - 프로젝트 상세보기 모달
$(function () {
    // edit 프로젝트
    $('#book1').on('click', function () {
        $('#edit_project_modal1').fadeIn();
        $('.edit_modal_close').on('click', function () {
            $('#edit_project_modal1').fadeOut();
        })
    })

    $('#book2').on('click', function () {
        $('#edit_project_modal2').fadeIn();
        $('.edit_modal_close').on('click', function () {
            $('#edit_project_modal2').fadeOut();
        })
    })

    $('#book3').on('click', function () {
        $('#edit_project_modal3').fadeIn();
        $('.edit_modal_close').on('click', function () {
            $('#edit_project_modal3').fadeOut();
        })
    })
});


