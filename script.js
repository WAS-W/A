bydocument.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  
  const homeHTML = `
  <header>
    <img src="logo.png">
    <h2>AlphaWolfTechnology</h2>
    <h3 class="list">|||</h3>
    <nav>
      <a href="#/" data-page="home">الرئيسية</a>
      <a href="#/projects" data-page="projects">مشاريعنا</a>
      <a href="#/contact" data-page="contact">تواصل</a>
    </nav>
  </header>
  <div class="cont">
    <img src="logo.png" alt="">
    <h3>شركة <h2>AlphaWolfTechnology</h2> لتطوير مواقع الويب</h3>
  </div>
  <div class="contain">
    <h4>خدمات كاملة في تطوير المواقع و تحسين عملك</h4>
    <ul>
      <li>تطوير مواقع ويب سريعة</li>
      <li>تصميم واجهات جذابة</li>
      <li>تجربة مستخدم جذابة</li>
    </ul>
  </div>
  <a href="https://wa.me/+2010209290  <hr>
  <footer><h4>AlphaWolfTechnology</h4>جميع الحقوق محفوظة ©<br>2026</footer>
  `;

  const projectsHTML = `
  <header>
    <img src="logo.png">
    <h2>AlphaWolfTechnology</h2>
    <h3 class="list">|||</h3>
    <nav>
      <a href="#/" data-page="home">الرئيسية</a>
      <a href="#/projects" data-page="projects">مشاريعنا</a>
      <a href="#/contact" data-page="contact">تواصل</a>
    </nav>
  </header>
  <div class="projects">
    <h2>مشاريعنا</h2>
    <div class="card-container">
      <img src="weather.jpg" alt="Weather App" class='card-img'>
      <h3 class='card-title'>تطبيق الطقس</h3>
      <p class='card-p'>عرض حالة الطقس والرطوبة وسرعة الرياح بتصميم عصري</p>
      <a href='https://sohyp220-coder.github.io/WitherApp'>زيارة</a>
    </div>
    <div class="card-container">
      <img src="islamic.jpg" alt="Islamic App" class='card-img'>
      <h3 class='card-title'>تطبيق ليطمئن</h3>
      <p class='card-p'>قرآن كريم، أذكار، سبحة إلكترونية ومواقيت الصلاة</p>
      <a href='https://sohyp220-coder.github.io/LetItBeCalm'>زيارة</a>
    </div>
    <div class="card-container">
      <img src="pharmacy.jpg" alt="Pharmacy App" class='card-img'>
      <h3 class='card-title'>صيدلية المصري الجديدة</h3>
      <p class='card-p'>روشتة ذكية، عناية بالبشرة، وأدوات طبية</p>
      <a href='https://sohyp220-coder.github.io/Pharmacy-'>زيارة</a>
    </div>
    <div class="card-container">
      <img src="task.jpg" alt="Wolf Task Manager" class='card-img'>
      <h3 class='card-title'>Wolf Task Manager</h3>
      <p class='card-p'>نظام إدارة المهام الخاص بشركة Alpha Wolf</p>
      <a href='https://was-w.github.io/AlphaTaskManager'>زيارة</a>
    </div>
  </div>
  <hr>
  <footer><h4>AlphaWolfTechnology</h4>جميع الحقوق محفوظة ©<br>2026</footer>
  `;
  
  const contactHTML = `
  <header>
    <img src="logo.png">
    <h2>AlphaWolfTechnology</h2>
    <h3 class="list">|||</h3>
    <nav>
      <a href="#/" data-page="home">الرئيسية</a>
      <a href="#/projects" data-page="projects">مشاريعنا</a>
      <a href="#/contact" data-page="contact">تواصل</a>
    </nav>
  </header>
  <div class="cont">
    <h2>تواصل معنا</h2>
    <p>احنا جاهزين نحول فكرتك لموقع احترافي</p>
    <a href="https://wa.me/+201020929052">كلمنا واتساب</a> 
  </div>
  <hr>
  <footer><h4>AlphaWolfTechnology</h4>جميع الحقوق محفوظة ©<br>2026</footer>
  `;

  function render() {
    const hash = window.location.hash;
    if (hash === '#/projects') body.innerHTML = projectsHTML;
    else if (hash === '#/contact') body.innerHTML = contactHTML;
    else body.innerHTML = homeHTML;
  }


  window.addEventListener('hashchange', render);
  render(); // أول تحميل
});
