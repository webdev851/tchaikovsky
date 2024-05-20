'use strict'

  const header = document.querySelector('.navbar'),
        headerOffset = header.offsetTop,
        burger = document.querySelector('.burger'),
        menu = document.querySelector('.nav-menu'),
        dropdownItems = document.querySelectorAll('.dropdown-menu');

  let lastScrollY = window.pageYOffset;
  const firstSectionHeight = document.querySelector('.section-hero').offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset
    let opacity = Math.min(currentScrollY / firstSectionHeight, 0.8)
    
    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`

    if (currentScrollY > lastScrollY) {
      header.style.transform = 'translateY(-100%)'
    } else {
      header.style.transform = 'translateY(0)'
    }
    
    lastScrollY = currentScrollY
  })


  burger.addEventListener('click', () => {
    menu.classList.toggle('opened')
  })

  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const dropListMenu = item.querySelector('.drop-list-menu.w-dropdown-list')
      
      // Закрыть все открытые меню
      document.querySelectorAll('.drop-list-menu.w-dropdown-list.opened').forEach(openedMenu => {
        if (openedMenu !== dropListMenu) {
          openedMenu.classList.remove('opened')
        }
      });

      // Переключить класс opened у текущего меню
      if (dropListMenu) {
        dropListMenu.classList.add('opened')
      }
    })
  })


  // Табы
  const 
    tabs = document.querySelector('.tabs'),
    accordion = document.querySelector('.accordion'),
    tabItem = document.querySelectorAll('.tab-btn'),
    tabItemInner = document.querySelectorAll('.tab-btn-inner'),
    tabContent = document.querySelectorAll('.tab-content'),
    tabContentInner = document.querySelectorAll('.tab-content-inner')

  if (tabs) {
    // Инициализация внутренних табов для каждого верхнего таба
    tabContent.forEach((tabContent) => {
      if (tabItemInner.length > 0 && !accordion) {
        tabItemInner[0].classList.add('active');
        tabContentInner[0].classList.add('active');
      }
    });

    // Обработчик событий для кликов по внутренним табам
    tabs.addEventListener('click', function(event) {
      const button = event.target.closest('.tab-btn-inner');
      if (!button) return;

      const innerTabId = button.getAttribute('data-button');
      const innerTabContent = document.getElementById(innerTabId);

      if (!accordion) {
        tabItemInner.forEach((btn) => btn.classList.remove('active'));
        tabContentInner.forEach((content) => content.classList.remove('active'));

        if (innerTabContent) {
          innerTabContent.classList.add('active');
          button.classList.add('active');
        }
      } else {
        // Закрыть все внутренние табы
        const parentTabContent = button.closest('.tab-content');
        const innerTabItems = parentTabContent.querySelectorAll('.tab-btn-inner');
        const innerTabContents = parentTabContent.querySelectorAll('.tab-content-inner');

        innerTabItems.forEach((btn) => {
          if (btn !== button) btn.classList.remove('active');
        });

        innerTabContents.forEach((content) => {
          if (content !== innerTabContent) content.classList.remove('active');
        });

        if (innerTabContent) {
          innerTabContent.classList.toggle('active');
          button.classList.toggle('active');
        }
      }
    });

    // Установка первого верхнего таба активным по умолчанию
    if (tabItem.length > 0 && !accordion) {
      tabItem[0].classList.add('active');
      tabContent[0].classList.add('active');
    }

    // Обработчик событий для кликов по верхним табам
    tabs.addEventListener('click', function(event) {
      const button = event.target.closest('.tab-btn');
      if (!button) return;

      const topTabId = button.getAttribute('data-button');
      const topTabContent = document.getElementById(topTabId);

      if (!accordion) {
        tabItem.forEach((btn) => btn.classList.remove('active'));
        tabContent.forEach((content) => content.classList.remove('active'));

        if (topTabContent) {
          topTabContent.classList.add('active');
          button.classList.add('active');
        }
      } else {
        // Закрыть все верхние табы
        tabItem.forEach((btn) => {
          if (btn !== button) btn.classList.remove('active');
        });

        tabContent.forEach((content) => {
          if (content !== topTabContent) content.classList.remove('active');
        });

        if (topTabContent) {
          topTabContent.classList.toggle('active');
          button.classList.toggle('active');
        }
      }

      // Активировать первый внутренний таб внутри выбранного верхнего таба
      const innerTabItems = document.querySelectorAll(`#${topTabId} .tab-btn-inner`);
      const innerTabContents = document.querySelectorAll(`#${topTabId} .tab-content-inner`);

      if (innerTabItems.length > 0 && !accordion) {
        innerTabItems.forEach((btn) => btn.classList.remove('active'));
        innerTabContents.forEach((content) => content.classList.remove('active'));

        innerTabItems[0].classList.add('active');
        innerTabContents[0].classList.add('active');
      }
    });
  }

  // init wow.js
  const wow = new WOW({ 
    boxClass: 'wow',
    animateClass: 'animate__animated',
    mobile: false,
  }) 

  wow.init()


