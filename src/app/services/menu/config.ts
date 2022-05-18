export const getMenuData: any[] = [
  {
    category: true,
    title: 'BizDom',
  },
  {
    title: 'Dashboard',
    key: 'dashboard',
    icon: 'fa fa-area-chart',
    url: '/apps/dashboard',
  },
  // {
  //   title: 'Sale',
  //   key: 'appsProfile',
  //   icon: 'fe fe-shopping-cart',
  //   url: '/apps/sale',
  // },
  // {
  //   title: 'Receipts',
  //   icon: 'fa fa-pencil-square-o',
  //   key: 'appsSetting',
  //   url: '/apps/receipt',
  // },
  // {
  //   title: 'Customers',
  //   key: 'appsSetting',
  //   icon: 'fe fe-users',
  //   url: '/apps/customer',
  // },
  // {
  //   title: 'Add Stock',
  //   key: 'appsBatchEntry',
  //   icon: 'fe fe-layers',
  //   url: '/apps/batchentry',
  // },
  // {
  //   title: 'Stock',
  //   key: 'appsSetting',
  //   icon: 'fe fe-shopping-bag',
  //   url: '/apps/Stock',
  // },
  // {
  //   title: 'Product',
  //   key: 'appsProfile',
  //   icon: 'fe fe-grid',
  //   url: '/apps/products',
  // },
  // {
  //   title: 'Category',
  //   key: 'appsProfile',
  //   icon: 'fa fa-sitemap',
  //   url: '/apps/category',
  // },
  // {
  //   title: 'TaxGroup',
  //   key: 'appsSetting',
  //   icon: 'fa fa-calculator',
  //   url: '/apps/taxgroup',
  // },
  // {
  //   title: 'Purchase Entry',
  //   key: 'appsSetting',
  //   icon: 'fe fe-shopping-bag',
  //   url: '/apps/purchaseentry',
  // },
  // {
  //   title: 'Vendors',
  //   key: 'appsSetting',
  //   icon: 'fe fe-user-check',
  //   url: '/apps/vendors',
  // },
  {
    title: 'Needed Products',
    key: 'appsaddproduct',
    icon: 'fa fa-object-group',
    url: '/apps/addproduct',
  },
  {
    title: 'Report Management',
    key: 'apps',
    icon: 'fa fa-sticky-note',
    children: [
      {
        title: 'Sales Report',
        key: 'appsSetting',
        icon: 'fa fa-calendar-check-o',
        url: '/apps/Daywisesale',
      },
      {
        title: 'ProductwiseSales',
        key: 'appsSetting',
        icon: 'fa fa-product-hunt',
        url: '/apps/ProductwiseSales',
      },

      {
        title: 'CategorywiseSales',
        key: 'appsSetting',
        icon: 'fa fa-sitemap',
        url: '/apps/CatawiseSales',
      },
      {
        title: 'Paymenttypes',
        key: 'appsSetting',
        icon: 'fa fa-money',
        url: '/apps/Paymenttypes',
      },
    ]
  },
  // {
  //   title: 'Setting',
  //   key: 'appsSetting',
  //   icon: 'fa fa-cogs',
  //   url: '/apps/setting',
  // },

  // {
  //   title: 'Pricing Tables',
  //   key: 'pricingTables',
  //   icon: 'fe fe-command',
  //   url: '/advanced/pricing-tables',
  // },
  // {
  //   title: 'AboutUs',
  //   key: 'Update',
  //   icon: 'fe fe-alert-octagon',
  //   url: '/apps/aboutus',
  // },
]
