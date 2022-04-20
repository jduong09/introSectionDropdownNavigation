document.addEventListener('DOMContentLoaded', () => {
  const navHamburger = document.getElementById('icon-menu');
  const closeMenu = document.getElementById('icon-close-menu');
  const drawer = document.getElementById('drawer');
  const mainTag = document.getElementsByTagName('main')[0];
  const featureArrow = document.getElementById('feature-arrow-down');
  const companyArrow = document.getElementById('company-arrow-down');
  const drawerSublist = document.getElementsByClassName('drawer-sublist');

  navHamburger.addEventListener('click', () => {
    if (drawer.classList.contains('drawer-hide')) {
      drawer.classList.remove('drawer-hide');
      drawer.classList.add('drawer-open');

      const backdrop = document.createElement('div');
      backdrop.classList.add('backdrop');
      backdrop.id = 'backdrop';
      mainTag.append(backdrop);
    }

    navHamburger.classList.add('hide');
  });

  closeMenu.addEventListener('click', () => {
    drawer.classList.remove('drawer-open');
    drawer.classList.add('drawer-hide');
    navHamburger.classList.remove('hide');

    const backdrop = document.getElementById('backdrop');
    backdrop.remove();
  });

  const drawerArrows = [featureArrow, companyArrow];

  for (let i = 0; i < drawerSublist.length; i++) {
    const headerName = drawerArrows[i].id.split('-')[0];
    const headerSublist = document.getElementById(`${headerName}-sublist`);
    drawerSublist[i].addEventListener('click', () => {
      const childArrowTag = drawerSublist[i].children[1];
      if (!childArrowTag.classList.contains('show-sublist')) {
        headerSublist.classList.remove('hide');
        childArrowTag.classList.add('show-sublist');
      } else {
        headerSublist.classList.add('hide');
        childArrowTag.classList.remove('show-sublist');
      }
    });
  }
});