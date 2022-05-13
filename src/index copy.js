const { default: axios } = require("axios");

require(`./js/scripts`);
import 'regenerator-runtime/runtime'
require("./css/style.scss");
require("./js/polyfills");


let packlist = []
packlist["pack-16"] = [
  {
    product: "QE55QN85AAUXCE",
    badge: false,
    gift: {
      title:
        "<b>Вы получаете:</b><br> SoundBar (Q600A), пылесос и  промокод 10% на следуюущую покупку ",
      gift_sku: "HW-Q600A/RU, VC18M21C0VR/EV",
    },
  },
  { product: "AR09BSEANWKNER", 
    badge: false, 
    gift: false 
  },
]
let parentData;
const createBundleProduct = async (sku) => {
  let newResult = {}
  let productCard;
  await axios.get(`https://searchapi.samsung.com/v6/front/b2c/product/card/detail/newhybris?siteCode=kz_kz&shopSiteCode=kz_kz&commonCodeYN=N&saleSkuYN=N&onlyRequestSkuYN=N&keySummaryYN=N&modelList=QE55QN85AAUXCE`)
    .then(res => newResult = res.data.response.resultData.productList)
  for (let i = 0; i< newResult.length; i++) {
    parentData = {
      parentName: newResult[i].fmyMarketingName,
      options: newResult[i].chipOptions,
      products: [],
    }
    if (newResult[i].modelList.length > 0) {
      for (let k = 0; k< newResult[i].modelList.length; k++) {
        let productItem = newResult[i].modelList[k];
        parentData.products.push({
          shopSKU: productItem.shopSKU,
          modelName: productItem.modelName,
          displayName: productItem.displayName,
          galleryImage: productItem.galleryImage,
          pdpUrl: productItem.pdpUrl,
          fmyOptionsList: productItem.fmyChipList,
          availability: productItem.ctaType,
          price: productItem.price,
          priceDisplay: productItem.priceDisplay,
          promotionPrice: productItem.promotionPrice,
          promotionPriceDisplay: productItem.promotionPriceDisplay,
        });
      }
      console.log(parentData)
    }
    productCard = `
    <div>${parentData.parentName}</div>
    <div>${parentData.options[0].optionList[i].optionName}</div>
  `
  }
  let sizes = parentData.options[0].optionList.forEach(sizes => {
    console.log(sizes.optionName)
  })
  for (let i = 0;i<parentData.options[0].optionList.length; i++) {
    bundleSizes.insertAdjacentHTML('beforeend', `<button>${parentData.options[0].optionList[i].optionName}</button>`)
  }
}
createBundleProduct()

const bundlePop = document.querySelector('.bundle-pop')
const bundleContent = document.querySelector(".bundle-content");
const bundleSizes = document.querySelector(".bundle-sizes");
const openBundleBtns = document.querySelectorAll('.open-pack')

// openBundleBtns.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     bundlePop.classList.remove('none')
//     createBundleProduct(e.target.dataset.pack)
//   })
// })