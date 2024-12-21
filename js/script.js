function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = document.querySelector('.menu-icon');
    navMenu.classList.toggle('active'); // เพิ่มหรือลบ class "active" ที่จะทำให้เมนูแสดง
    menuIcon.classList.toggle('open'); // เปลี่ยนไอคอน hamburger เป็นกากบาท
  }