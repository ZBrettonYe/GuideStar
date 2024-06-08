// 渲染标签页
const renderTabs = () => {
    const tabsContainer = document.getElementById("myTab");
    const tabsContentContainer = document.getElementById("myTabContent");

    // 遍历分类映射数组
    categoryMap.forEach((category, index) => {
        const tabId = `tab-${category.id}`;
        const contentId = `content-${category.id}`;

        // 生成标签页
        const tab = `
        <li class="nav-item" role="presentation">
          <button class="nav-link ${index === 0 ? 'active' : ''}" id="${tabId}-tab" data-bs-toggle="tab" data-bs-target="#${contentId}" type="button" role="tab" aria-controls="${contentId}" aria-selected="${index === 0 ? 'true' : 'false'}">${category.name}</button>
        </li>
      `;
        tabsContainer.innerHTML += tab;

        // 生成标签页内容
        const content = `
        <div class="tab-pane fade ${index === 0 ? 'show active' : ''}" id="${contentId}" role="tabpanel" aria-labelledby="${tabId}-tab">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="${contentId}-container">
            <!-- 使用 JavaScript 动态生成网站卡片 -->
          </div>
        </div>
      `;
        tabsContentContainer.innerHTML += content;

        // 渲染标签页内容
        renderSites(category.id, `${contentId}-container`);
    });
};

// 渲染网站列表
const renderSites = (categoryId, containerId) => {
    const container = document.getElementById(containerId);
    const sitesInCategory = sites.filter(site => site.category === categoryId);
    sitesInCategory.forEach(site => {
        const card = `
        <div class="col">
          <div class="card">
            <img src="${site.icon}" class="card-img-top" alt="${site.name}">
            <div class="card-body">
              <h5 class="card-title">${site.name}</h5>
              <p class="card-text">${site.description}</p>
              <a href="http://${site.domain}" class="btn btn-primary" target="_blank">访问网站</a>
            </div>
          </div>
        </div>
      `;
        container.innerHTML += card;
    });
};

// 初始化页面
renderTabs();