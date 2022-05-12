recomendationBtns.forEach((rec) => {
    rec.addEventListener("click", (e) => {
      let data = e.target.dataset.rec;
      if (data == "general1") {
        overlay.classList.remove("none");
        document.body.style.overflow = 'hidden'
      //   document.body.style.overflow = "hidden"
        popup.innerHTML = `
        <div class="desktop">
        <span>
        <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
    </span>
    <h4 class="popup-header">Интерьердегі аймаққа бөлу</h4>
    <div class="popup-wrapper">
        <div>
            <p class="bold popup-text-1">Жұмыс күні аяқталған соң, демалып, тынығатын тыныш, жарық және үйлесімді кеңістік жасау ойға жиі келеді. Онымен қоса, үйде заттарды сақтауға арналған және жұмыс істеу үшін орындар болуы тиіс. Осындай жағдайда Дизайнер үй кеңістігін дербес (тұрғын) және көпшілік аймаққа бөлуге кеңес береді. </p>
            <p class="popup-text_small popup-text_small-1">Дербес аймақта жатын бөлмені, шомылатын бөлмені, гардеробты, тіпті, мүмкін болса,  кір жуатын бөлмені орналастырыңыз. Ал көпшілікке арналған аймақта қонақ бөлмені, асүйді, кабинетті, қонақ жатын бөлмелері мен санитарлық торап жасауға болады. Осылайша тұрғын дербес аймақта тынығуға жағдай жасалады ал көпшілік аймақты барлық функционалды заттармен жабдықтаймыз.</p>
        </div>
        <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP1.png" alt="">
    </div>
    <div class="popup-wrapper">
        <div>
            <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP2.png" alt="">
            <p>Ол шын алауошақтан ауымайды, кеңістікті жылы ауамен толтырып, жайлылық сезімін береді. Жалпы, әр отбасы мүшесі күйбең тіршіліктен арылып, жайлы кітаппен немесе терезеден сырттағы көріністі қарап тыныға алатын бірнеше орын жасау маңызды. Осындай орындар үйдің қайталанбас энергиясын қалыптастырып, өзіңе тиесілі жеке кеңістік сезімін береді.</p>
        </div>
        <div>
            <p class="popup-text_small popup-text_small-2">
            Егер үйдің жоспары мүмкін етсе, асүйде келген қонақтарға көрінбейтін, бірақ үй иелері үшін барлық керекті заттарды сақтауға арналған қойма орналастыруға болады.  <br>
            Сырластық көңіл-күйін тудыру үшін от энергиясын көрсететін тура немесе жанама элементтерді пайдалануға болады. Мысалы бу алауошағын пайдалана аласыз. 
            </p>
            <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP3.png" alt="">
        </div>
    </div>
    <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
    <div class="popup-wrapper">
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge.png" alt="fridge">
            <div class="bold popup-itemCard-name">Киімді күтуге арналған <br> бу шкафы</div>
            <div class="popup-itemCard-model">DF10A9500CG/LP</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: сұр</div>
            <button class="color-wrapper">
              <div class="color-inner color-grey"></div>
            </button>
            <div class="popup-itemCard-price">1 199 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="DF10A9500CG/LP" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/washers-and-dryers/airdresser/df9000rm-silver-mirror-df10a9500cg-lp/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalItem2.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">The Frame Art Mode 4K <br> Smart TV (2021)</div>
            <div class="popup-itemCard-model">QE43LS03AAUXCE</div>
            <div class="popup-itemCard-color"><b>Жақтауыңыздың түсін таңдаңыз</b></div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">399 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="QE43LS03AAUXCE" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/lifestyle-tvs/the-frame/ls03a-43-inch-the-frame-art-mode-4k-smart-tv-black-qe43ls03aauxce/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetBot.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Jet Bot AI+ <br> робот-шаңсорғышы</div>
            <div class="popup-itemCard-model">VR50T95735W/EV</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: ақ</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">499 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="VR50T95735W/EV" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/robot/vr9500t-white-vr50t95735w-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
      </div>
        </div>
  
      <div class="mobile">
      <span>
      <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
  </span>
  <h4 class="popup-header1">Интерьердегі аймаққа бөлу</h4>
  <div class="popup-wrapper">
      <div>
          <p class="bold popup-text-1">Жұмыс күні аяқталған соң, демалып, тынығатын тыныш, жарық және үйлесімді кеңістік жасау ойға жиі келеді. Онымен қоса, үйде заттарды сақтауға арналған және жұмыс істеу үшін орындар болуы тиіс. Осындай жағдайда Дизайнер үй кеңістігін дербес (тұрғын) және көпшілік аймаққа бөлуге кеңес береді. </p>
      </div>
      <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP1.png" alt="">
      <p class="popup-text_small">Дербес аймақта жатын бөлмені, шомылатын бөлмені, гардеробты, тіпті, мүмкін болса,  кір жуатын бөлмені орналастырыңыз. Ал көпшілікке арналған аймақта қонақ бөлмені, асүйді, кабинетті, қонақ жатын бөлмелері мен санитарлық торап жасауға болады. Осылайша тұрғын дербес аймақта тынығуға жағдай жасалады ал көпшілік аймақты барлық функционалды заттармен жабдықтаймыз.</p>
  </div>
  <div class="popup-wrapper">
      <div class="popup-parent">
          <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP2mob.png" alt="">
          <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP3mob.png" alt="">
      </div>
      <div class="popup-wrapper popup-parent">
        <p class="popup-text_small popup-text_small-2">
          Если позволяет планировка, в кухне можно продумать кладовую, которая не будет видна гостям дома, но для владельцев она станет местом для хранения всего необходимого. <br>
      </p>
      </div>
      <p class="popup-text-1mob">Сырластық көңіл-күйін тудыру үшін от энергиясын көрсететін тура немесе жанама элементтерді пайдалануға болады. Мысалы бу алауошағын пайдалана аласыз. Ол шын алауошақтан ауымайды, кеңістікті жылы ауамен толтырып, жайлылық сезімін береді. </p>
      <p class="bold text-left">Жалпы, әр отбасы мүшесі күйбең тіршіліктен арылып, жайлы кітаппен немесе терезеден сырттағы көріністі қарап тыныға алатын бірнеше орын жасау маңызды. Осындай орындар үйдің қайталанбас энергиясын қалыптастырып, өзіңе тиесілі жеке кеңістік сезімін береді. </p>
  </div>
  <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
  <div class="popup-wrapper popup-wrapper-nogap">
      <div class="popup-itemCard">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge.png" alt="fridge">
          <div class="bold popup-itemCard-name">Киімді күтуге арналған <br> бу шкафы</div>
          <div class="popup-itemCard-model">DF10A9500CG/LP</div>
          <div class="popup-itemCard-color"><b>Цвет</b>: сұр</div>
          <button class="color-wrapper">
            <div class="color-inner color-grey"></div>
          </button>
          <div class="popup-itemCard-price">1 199 990 ₸</div>
          <div class="buttons buttons-column">
              <button data-id="DF10A9500CG/LP" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
              <a href="https://www.samsung.com/kz_kz/washers-and-dryers/airdresser/df9000rm-silver-mirror-df10a9500cg-lp/" class="btn btn-link btn-link-underline">Көбірек білу</a>
          </div>
      </div>
      <div class="popup-itemCard">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalItem2.png" alt="generalItem2">
          <div class="bold popup-itemCard-name">The Frame Art Mode 4K <br> Smart TV (2021)</div>
          <div class="popup-itemCard-model">QE43LS03AAUXCE</div>
          <div class="popup-itemCard-color"><b>Жақтауыңыздың түсін таңдаңыз</b></div>
          <button class="color-wrapper">
            <div class="color-inner color-white"></div>
          </button>
          <div class="popup-itemCard-price">399 990 ₸</div>
          <div class="buttons buttons-column">
              <button data-id="QE43LS03AAUXCE" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
              <a href="https://www.samsung.com/kz_kz/lifestyle-tvs/the-frame/ls03a-43-inch-the-frame-art-mode-4k-smart-tv-black-qe43ls03aauxce/" class="btn btn-link btn-link-underline">Көбірек білу</a>
          </div>
      </div>
      <div class="popup-itemCard">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetBot.png" alt="generalItem2">
          <div class="bold popup-itemCard-name">Jet Bot AI+ <br> робот-шаңсорғышы</div>
          <div class="popup-itemCard-model">VR50T95735W/EV</div>
          <div class="popup-itemCard-color"><b>Цвет</b>: ақ</div>
          <button class="color-wrapper">
            <div class="color-inner color-white"></div>
          </button>
          <div class="popup-itemCard-price">499 990 ₸</div>
          <div class="buttons buttons-column">
              <button data-id="VR50T95735W/EV" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
              <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/robot/vr9500t-white-vr50t95735w-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
          </div>
      </div>
    </div>
      </div>
              `;
      } else if (data == "general2") {
        overlay.classList.remove("none");
        document.body.style.overflow = 'hidden'
        popup.innerHTML = `
        <div class="desktop">
              <span>
              <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
          </span>
          <h4 class="popup-header">Хоббидің көрініс табуы</h4>
          <p class="bold">
          Үй иесінің бірегейлігін интерьер элементтері арқылы көрсетуге болады.  
          </p>
          <div class="popup-wrapper">
              <div>
                  <p class="popup-text_small popup-text_small-21">Хобби, музыкаға махаббат немесе қанық түсті киім киісі негізгі бейтарап түс пен жарқын және өзгеше түстерді таңдауға негіз бола алады. Осы ретте, басты түсті әр түрлі жазықтық пен формаларда көрсетуге болады: асүй қасбетінде, жиһаз қаптауында, декорда. Осылайша кеңістікте біріктіретін элемент қана емес, сонымен бірге оның жасаушыға қатысы байқалады. </p>
              </div>
              <div>
                  <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general21.png" alt="">
                  <p class="popup-text_small popup-text_small-22">
                      Шомылатын бөлме жатын бөлмеден әйнек арақабырғамен оқшауланған интерьерлік шешімдер де бар. Осылайша жарық шомылатын бөлмеге түседі. Сонымен бірге осындай тәсіл бөлме иесіне тән жарқын және еркін мінезді көрсетеді. Қаласаңыз арақабырғаны пердемен жауып қоюға болады, дегенмен бұл өзгешеліктің мәні сол қалпында қалады. 
                  </p>
              </div>
          </div>
          <div class="popup-wrapper">
              <div>
                  <img class="popup-img popup-img-22" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general22.png" alt="">
              </div>
              <div>
                  <p class="popup-text popup-text_small-23">Өмір сүруге арналған кеңістік инфлюенсерлердің кеңтеріне қарамай, сән қуудан бөлек, сіз үшін барынша ыңғайлы болуы тиіс </p>
              </div>
          </div>
          <img class="popup-img popup-img-23" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general23.png" alt="">
          <h4 class="popup-header popup-header-2">Сай келетін Samsung техникасының топтамасы</h4>
          <div class="popup-wrapper">
              <div class="popup-itemCard">
                  <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/serif.png" alt="fridge">
                  <div class="bold popup-itemCard-name">The Serif 4K <br> Smart TV</div>
                  <div class="popup-itemCard-model">QE55LS01TAUXRU</div>
                  <div class="popup-itemCard-color"><b>Түс</b>: ақ</div>
                  <button class="color-wrapper">
                    <div class="color-inner color-white"></div>
                  </button>
                  <div class="popup-itemCard-price">499 990 ₸</div>
                  <div class="buttons buttons-column">
                      <button data-id="QE55LS01TAUXRU" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                      <a href="https://www.samsung.com/kz_kz/lifestyle-tvs/the-serif/the-serif-55-inch-4k-smart-tv-ls01t-cloud-white-qe55ls01tauxru/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                  </div>
              </div>
              <div class="popup-itemCard">
                  <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
                  <div class="bold popup-itemCard-name">BESPOKE Jet One, <br> шаңсорғышы</div>
                  <div class="popup-itemCard-model">VS20A95973B/EV</div>
                  <div class="popup-itemCard-color"><b>Түс</b>: қара көк</div>
                  <button class="color-wrapper">
                    <div class="color-inner color-darkblue"></div>
                  </button>
                  <div class="popup-itemCard-price">549 990 ₸</div>
                  <div class="buttons buttons-column">
                      <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                      <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                  </div>
              </div>
              <div class="popup-itemCard">
                  <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridgeBes.png" alt="generalItem2">
                  <div class="bold popup-itemCard-name">BESPOKE тоңазытқышы</div>
                  <div class="popup-itemCard-model">RB38A7B62AP/WT</div>
                  <div class="popup-itemCard-color"><b>Түс</b>: ақ</div>
                  <button class="color-wrapper">
                    <div class="color-inner color-white"></div>
                  </button>
                  <div class="popup-itemCard-price">529 990 ₸</div>
                  <div class="buttons buttons-column">
                      <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                      <a href="https://www.samsung.com/kz_kz/refrigerators/bottom-mount-freezer/rb7300t-385l-white-rb38a7b62ap-wt/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                  </div>
              </div>
          </div>
        </div>
  
        <div class="mobile">
        <span>
        <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
    </span>
    <h4 class="popup-header">Хоббидің көрініс табуы</h4>
    <p class="bold">
    Үй иесінің бірегейлігін интерьер элементтері арқылы көрсетуге болады.  
    </p>
    <img class="popup-img popup-img-21" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general21.png" alt="">
        <div>
            <p class="popup-text_small popup-text_small-21">Хобби, музыкаға махаббат немесе қанық түсті киім киісі негізгі бейтарап түс пен жарқын және өзгеше түстерді таңдауға негіз бола алады. Осы ретте, басты түсті әр түрлі жазықтық пен формаларда көрсетуге болады: асүй қасбетінде, жиһаз қаптауында, декорда. Осылайша кеңістікте біріктіретін элемент қана емес, сонымен бірге оның жасаушыға қатысы байқалады. </p>
        </div>
        <div class="popup-wrapper popup-wrapper2">
          <img class="popup-img popup-img-22" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general22mob.png" alt="">
          <p class="popup-text_small popup-text_small-22">
              Шомылатын бөлме жатын бөлмеден әйнек арақабырғамен оқшауланған интерьерлік шешімдер де бар. Осылайша жарық шомылатын бөлмеге түседі. Сонымен бірге осындай тәсіл бөлме иесіне тән жарқын және еркін мінезді көрсетеді. Қаласаңыз арақабырғаны пердемен жауып қоюға болады, дегенмен бұл өзгешеліктің мәні сол қалпында қалады. 
          </p>
        </div>
    <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general23.png" alt="">
    <p class="popup-text bold">Өмір сүруге арналған кеңістік инфлюенсерлердің кеңтеріне қарамай, сән қуудан бөлек, сіз үшін барынша ыңғайлы болуы тиіс </p>
    <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
    <div class="popup-wrapper popup-wrapper-nogap">
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/serif.png" alt="fridge">
            <div class="bold popup-itemCard-name">The Serif 4K <br> Smart TV</div>
            <div class="popup-itemCard-model">QE55LS01TAUXRU</div>
            <div class="popup-itemCard-color"><b>Түс</b>: ақ</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">499 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="QE55LS01TAUXRU" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/lifestyle-tvs/the-serif/the-serif-55-inch-4k-smart-tv-ls01t-cloud-white-qe55ls01tauxru/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Jet Bespoke шаңсорғышы</div>
            <div class="popup-itemCard-model">VS20A95973B/EV</div>
            <div class="popup-itemCard-color"><b>Түс</b>: қара көк</div>
            <button class="color-wrapper">
              <div class="color-inner color-darkblue"></div>
            </button>
            <div class="popup-itemCard-price">549 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridgeBes.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">BESPOKE тоңазытқышы</div>
            <div class="popup-itemCard-model">RB38A7B62AP/WT</div>
            <div class="popup-itemCard-color"><b>Түс</b>: ақ</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">529 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/refrigerators/bottom-mount-freezer/rb7300t-385l-white-rb38a7b62ap-wt/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
    </div>
        </div>
               `;
      } else if (data == "living") {
        overlay.classList.remove("none");
        document.body.style.overflow = 'hidden'
        popup.innerHTML = `
        <div class="desktop"> 
        <span>
          <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
        </span>
        <h4 class="popup-header">Қонақ бөлме</h4>
        <div class="popup-wrapper">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom1.png" alt="">
          <div>
            <p class="bold">Терракот перделер мен диван түсін ерекшелеу арқылы қою сұр қабырға мен ашық түсті еден түстерінің қанықтығын көрсетуге болады. </p>
            <p class="popup-text_small">Егер тыныштықта тынығу мен демалу үшін жағдай жасағыңыз келсе, толығымен бейтарап интерьер әзірлеуге болады, ал егер интерьерді өзгерткіңіз келсе өзгешеліктер қосу оңай.  </p>
          </div>
        </div>
        <p class="popup-text_small popup-text-l1">Жарық және жеңіл кеңістік жасау үшін еденге дейін түсетін терезелер, террасаға ашылатын есік және біраз ғана жиһаз керемет үйлеседі. Ашық-сарғыш қабырғалар  кеңістікті визуалды кеңейтетін қара маймен қапталған еден түсін айқындайды. Қабырға сөрелерін ойластырып, Samsung теледидарының өлшеміне сәйкестеп, оған тапсырыс беруге болады. Бау-бақшаны тамашалау үшін, креслоны эркердің жанына орналастырыңыз және бөлмеде не болып жатқанын біліп, теледидар көру үшін төмен диван орнатыңыз.</p>
        <img class="popup-img-l2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom2.png" alt="">
        <div class="popup-lroomWrapper">
          <img class="popup-img-l3" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom3.png" alt="">
          <p class="popup-text_small popup-text-l3">Интерьерге джапанди стилінің элементтерін, мысалы күріш қағазынан жасалған екі шам қосыңыз. Кеңістікті жарықпен толтырып, ауа кіру үшін ашық терезелер мен бейтарап түстер таңдаңыз. Табиғат стильдің бір бөлшегі болуы үшін, эркерға құмыра ішіндегі жасыл өсімдіктерді орналастырыңыз. </p>
        </div>
        <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
        <div class="popup-wrapper">
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/tv.png" alt="fridge">
                <div class="bold popup-itemCard-name">Neo QLED 8K Smart TV <br> (2021) 85"</div>
                <div class="popup-itemCard-model">QE85QN900AUXCE</div>
                <div class="popup-itemCard-price">5 499 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="QE85QN900AUXCE" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                    <a href="https://www.samsung.com/kz_kz/tvs/qled-tv/qn900a-85-inch-neo-qled-8k-smart-tv-qe85qn900auxce/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/soundbar.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">3.1.2ch саундбар <br> (2021)</div>
                <div class="popup-itemCard-model">HW-Q700A/RU</div>
                <div class="popup-itemCard-price">259 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="HW-Q700A/RU" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                    <a href="https://www.samsung.com/kz_kz/audio-devices/soundbar/q700a-black-hw-q700a-ru/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">BESPOKE Jet One, <br> шаңсорғышы</div>
                <div class="popup-itemCard-model">VS20A95973B/EV</div>
                <div class="popup-itemCard-color"><b>Түс</b>: қара көк</div>
                <button class="color-wrapper">
                <div class="color-inner color-darkblue"></div>
              </button>
                <div class="popup-itemCard-price">549 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                    <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                </div>
            </div>
        </div>
      </div>
  
      <div class="mobile">
        <span>
          <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
        </span>
        <h4 class="popup-header">Қонақ бөлме</h4>
        <p class="bold popup-text-l1mob">
          Терракот перделер мен диван түсін ерекшелеу арқылы қою сұр қабырға мен ашық түсті еден түстерінің қанықтығын көрсетуге болады. 
        </p>
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom1mob.png" alt="">
        <p class="popup-text_small">Егер тыныштықта тынығу мен демалу үшін жағдай жасағыңыз келсе, толығымен бейтарап интерьер әзірлеуге болады, ал егер интерьерді өзгерткіңіз келсе өзгешеліктер қосу оңай.  </p>
        <img class="popup-img-l2mob" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom2mob.png" alt="">
        <p class="popup-text_small">Жарық және жеңіл кеңістік жасау үшін еденге дейін түсетін терезелер, террасаға ашылатын есік және біраз ғана жиһаз керемет үйлеседі. Ашық-сарғыш қабырғалар  кеңістікті визуалды кеңейтетін қара маймен қапталған еден түсін айқындайды. Қабырға сөрелерін ойластырып, Samsung теледидарының өлшеміне сәйкестеп, оған тапсырыс беруге болады. Бау-бақшаны тамашалау үшін, креслоны эркердің жанына орналастырыңыз және бөлмеде не болып жатқанын біліп, теледидар көру үшін төмен диван орнатыңыз.</p>
        <div class="popup-wrapper popup-wrapper-nowrap">
          <img class="popup-img-l3mob" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom3mob.png" alt="">
          <p class="popup-text_small popup-text-l3mob">Интерьерге джапанди стилінің элементтерін, мысалы күріш қағазынан жасалған екі шам қосыңыз. Кеңістікті жарықпен толтырып, ауа кіру үшін ашық терезелер мен бейтарап түстер таңдаңыз. Табиғат стильдің бір бөлшегі болуы үшін, эркерға құмыра ішіндегі жасыл өсімдіктерді орналастырыңыз. </p>
        </div>
        <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
        <div class="popup-wrapper popup-wrapper-nogap">
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/tv.png" alt="fridge">
                <div class="bold popup-itemCard-name">Neo QLED 8K Smart TV <br> (2021) 85"</div>
                <div class="popup-itemCard-model">QE85QN900AUXCE</div>
                <div class="popup-itemCard-price">5 499 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="QE85QN900AUXCE" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                    <a href="https://www.samsung.com/kz_kz/tvs/qled-tv/qn900a-85-inch-neo-qled-8k-smart-tv-qe85qn900auxce/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/soundbar.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">3.1.2ch саундбар <br> (2021)</div>
                <div class="popup-itemCard-model">HW-Q700A/RU</div>
                <div class="popup-itemCard-price">259 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="HW-Q700A/RU" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                    <a href="https://www.samsung.com/kz_kz/audio-devices/soundbar/q700a-black-hw-q700a-ru/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">BESPOKE Jet One, <br> шаңсорғышы</div>
                <div class="popup-itemCard-model">VS20A95973B/EV</div>
                <div class="popup-itemCard-color"><b>Түс</b>: қара көк</div>
                <button class="color-wrapper">
                <div class="color-inner color-darkblue"></div>
              </button>
                <div class="popup-itemCard-price">549 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                    <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                </div>
            </div>
        </div>
      </div>
              `;
      } else if (data === "kitchen") {
        overlay.classList.remove("none");
        document.body.style.overflow = 'hidden'
        popup.innerHTML = `
        <div class="desktop">
        <span>
        <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
    </span>
    <h4 class="popup-header">Асүй</h4>
    <div class="popup-wrapper">
        <div>
            <p class="bold popup-text bold popup-text-4">Егер асүйді көк түсте сәндегіңіз келсе, кеңістікті ауырлатпау үшін абай болу керек. Егер асүй қонақ бөлмемен біріккен болса, көк пен ақ түсті үйлесіруге болады. Сонымен бірге көзге жағымды түстерге көбірек назар аударту үшін,  тұтқалар мен жарық шамдарына жез, алтын детальдарды қосыңыз. .</p>
        </div>
        <div>
            <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen1.png" alt="">
            <p class="popup-text_small popup-text_small-42">
                Егер балаңыз көп болып, бірігіп отырып таңғы ас ішетін кеңістік керек болса, мысалда көрсетілгендей бөлек арал жасауға болады. Онда кешкі ас жасағанда отбасымен уақыт өткізу үшін ыдыс жуатын орын мен ыдыс жуу машинасын орналастыруға болады. <br><br>
                Иістерді араластырмай бірмезгілде екі тағам әзірлеуге болатын Samsung тұмшапешін асүй жиһаз жинағына орнатыңыз—бұл үлкен отбасы үшін аса ыңғайлы. 
            </p>
        </div>
    </div>
    <div class="popup-wrapper">
        <div>
            <img class="popup-img popup-img-42" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen12.png" alt="">
        </div>
    </div>
    <div class="popup-wrapper popup-wrapper-43">
        <div>
            <p class="popup-text_small popup-text_small-43">Екі бірдей тоңазытқыш панельмен жасырса көзге түспейді, ал олардың бір бұрышынан жылжытылатын сөресі бар бағана жасауға болады—онда ұсақ тұрмыстық техниканы оңай орналастыра аласыз.  </p>
        </div>
        <img class="popup-img popup-img-43" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen13.png" alt="">
    </div>
    <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
    <div class="popup-wrapper">
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/oven.png" alt="fridge">
            <div class="bold popup-itemCard-name">Тұмшапеш</div>
            <div class="popup-itemCard-model">NV75R5641RB/WT</div>
            <div class="popup-itemCard-color"><b>Түс</b>: қара</div>
            <button class="color-wrapper">
              <div class="color-inner color-black"></div>
            </button>
            <div class="popup-itemCard-price">499 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="NV75R5641RB/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/cooking-appliances/ovens/electric-oven-nv75r5641rb-wt/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/microwave.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Микротолқынды пеш</div>
            <div class="popup-itemCard-model">VS20A95973B/EV</div>
            <div class="popup-itemCard-color"><b>Түс</b>: жалбыз</div>
            <button class="color-wrapper">
              <div class="color-inner color-myta"></div>
            </button>
            <div class="popup-itemCard-price">99 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge2.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Bespoke тоңазытқышы</div>
            <div class="popup-itemCard-model">RZ32T7435AP/WT</div>
            <div class="popup-itemCard-color"><b>Түс</b>: ақ</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">544 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="RZ32T7435AP/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                <a href="https://www.samsung.com/kz_kz/refrigerators/one-door/323l-white-rz32t7435ap-wt/" class="btn btn-link btn-link-underline">Көбірек білу</a>
            </div>
        </div>
      </div>
    </div>
  
    <div class="mobile">
    <span>
    <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
  </span>
  <h4 class="popup-header">Асүй</h4>
    <p class="bold popup-text bold popup-text-4">Егер асүйді көк түсте сәндегіңіз келсе, кеңістікті ауырлатпау үшін абай болу керек. Егер асүй қонақ бөлмемен біріккен болса, көк пен ақ түсті үйлесіруге болады. Сонымен бірге көзге жағымды түстерге көбірек назар аударту үшін,  тұтқалар мен жарық шамдарына жез, алтын детальдарды қосыңыз. </p>
    <img class="popup-img popup-img-42" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen12.png" alt="">
    <p class="popup-text_small">
      Егер балаңыз көп болып, бірігіп отырып таңғы ас ішетін кеңістік керек болса, мысалда көрсетілгендей бөлек арал жасауға болады. Онда кешкі ас жасағанда отбасымен уақыт өткізу үшін ыдыс жуатын орын мен ыдыс жуу машинасын орналастыруға болады. <br><br>
      Иістерді араластырмай бірмезгілде екі тағам әзірлеуге болатын Samsung тұмшапешін асүй жиһаз жинағына орнатыңыз—бұл үлкен отбасы үшін аса ыңғайлы. 
  </p>
  <img class="popup-img popup-img-43" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen13.png" alt="">
  <p class="popup-text_small popup-text_small-43">Екі бірдей тоңазытқыш панельмен жасырса көзге түспейді, ал олардың бір бұрышынан жылжытылатын сөресі бар бағана жасауға болады—онда ұсақ тұрмыстық техниканы оңай орналастыра аласыз.  </p>
  <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
  <div class="popup-wrapper popup-wrapper-nogap">
    <div class="popup-itemCard">
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/oven.png" alt="fridge">
        <div class="bold popup-itemCard-name">Тұмшапеш</div>
        <div class="popup-itemCard-model">NV75R5641RB/WT</div>
        <div class="popup-itemCard-color"><b>Түс</b>: қара</div>
        <button class="color-wrapper">
          <div class="color-inner color-black"></div>
        </button>
        <div class="popup-itemCard-price">499 990 ₸</div>
        <div class="buttons buttons-column">
            <button data-id="NV75R5641RB/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
            <a href="https://www.samsung.com/kz_kz/cooking-appliances/ovens/electric-oven-nv75r5641rb-wt/" class="btn btn-link btn-link-underline">Көбірек білу</a>
        </div>
    </div>
    <div class="popup-itemCard">
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/microwave.png" alt="generalItem2">
        <div class="bold popup-itemCard-name">Микротолқынды пеш</div>
        <div class="popup-itemCard-model">VS20A95973B/EV</div>
        <div class="popup-itemCard-color"><b>Түс</b>: жалбыз</div>
        <button class="color-wrapper">
          <div class="color-inner color-myta"></div>
        </button>
        <div class="popup-itemCard-price">99 990 ₸</div>
        <div class="buttons buttons-column">
            <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
            <a href="https://www.samsung.com/kz_kz/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Көбірек білу</a>
        </div>
    </div>
    <div class="popup-itemCard">
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge2.png" alt="generalItem2">
        <div class="bold popup-itemCard-name">Bespoke тоңазытқышы</div>
        <div class="popup-itemCard-model">RZ32T7435AP/WT</div>
        <div class="popup-itemCard-color"><b>Түс</b>: ақ</div>
        <button class="color-wrapper">
          <div class="color-inner color-white"></div>
        </button>
        <div class="popup-itemCard-price">544 990 ₸</div>
        <div class="buttons buttons-column">
            <button data-id="RZ32T7435AP/WT" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
            <a href="https://www.samsung.com/kz_kz/refrigerators/one-door/323l-white-rz32t7435ap-wt/" class="btn btn-link btn-link-underline">Көбірек білу</a>
        </div>
    </div>
  </div>
  </div>
              `;
      } else if (data == "kid") {
        overlay.classList.remove("none");
        document.body.style.overflow = 'hidden'
        popup.innerHTML = `
             <div class="desktop">
             <span>
             <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
         </span>
         <h4 class="popup-header">Балалар бөлмесі</h4>
         <div class="popup-wrapper">
             <div>
                 <p class="bold popup-text-1">Балалар бөлмесінің интерьері үйдің жалпы стилінің бір бөлігі болуы мүмкін. Осы ретте, бөлменің ең жас иесінің пікіріне құлақ асу маңызды. </p>
                 <p class="popup-text_small popup-text_small-1">Балалар бөлмесінде негіз ретінде айтарлықтай ұстамды түстер таңдап, оларды бала өскенде өзгертуге болады. Түрлі-түсті ойыншықтар бөлмеге ерекшелік беріп, оның сәнін келтіреді. Есейгенде ойыншықтарды алып тастасақ, жатын бөлме байсалды, ұстамды бола қалады. Тар бөлмелерді кеңейту үшін айна қосыңыз, ал  Samsung теледидарының алдына бала достарымен ойнай алатын немесе жатып мультфильмдер көре алатын жерге жайылған подиум орнатыңыз. </p>
             </div>
             <div>
                 <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid1.png" alt="">
                 <p class="popup-text_small popup-text_small-51">Бормен жазуға арналған қара қабырға сурет салу мен жазу жазуды жақсы көретін балалар үшін керемет шешім. </p>
             </div>
         </div>
         <div class="popup-wrapper">
             <div>
                 <img class="popup-img popup-img-51" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid2.png" alt="">
             </div>
             <div>
                 <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid3.png" alt="">
                 <p class="popup-text_small">
                     Белсенді кеңістіктегі орынның барлығын балалар бөлмесімен алмас үшін, сақтауға арналған барлық орындарды балалар бөлмесінде көрінбей тұратын сөресі бар екі шкафпен біріктіруге болады
                 </p>
             </div>
         </div>
         <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
         <div class="popup-wrapper">
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/wind.png" alt="fridge">
                 <div class="bold popup-itemCard-name">Wind Free кондиционері</div>
                 <div class="popup-itemCard-model">AR12AXAAAWKNER</div>
                 <div class="popup-itemCard-price">494 990  ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AR12AXAAAWKNER" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                     <a href="https://www.samsung.com/kz_kz/air-conditioners/wall-mount/ar9500t-wind-free-ar12axaaawkner/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/air.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">Ауа тазалығышы</div>
                 <div class="popup-itemCard-model">AX60T5080WD/ER</div>
                 <div class="popup-itemCard-price">209 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AX60T5080WD/ER" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                     <a href="https://www.samsung.com/kz_kz/air-care/air-purifier/ax5500k-air-purifier-with-3-way-air-flow/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/freestyle.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">The Freestyle проекторы</div>
                 <div class="popup-itemCard-model">SP-LSP3BLAXCE</div>
                 <div class="popup-itemCard-price">569 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="SP-LSP3BLAXCE" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                     <a href="https://www.samsung.com/kz_kz/projectors/the-freestyle/lsp3b-the-freestyle-sp-lsp3blaxce/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                 </div>
             </div>
         </div>
             </div>
  
             <div class="mobile">
             <span>
             <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
         </span>
         <h4 class="popup-header">Балалар бөлмесі</h4>
         <p class="bold popup-text">Балалар бөлмесінің интерьері үйдің жалпы стилінің бір бөлігі болуы мүмкін. Осы ретте, бөлменің ең жас иесінің пікіріне құлақ асу маңызды. </p>
         <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid1.png" alt="">
         <p class="popup-text_small">Балалар бөлмесінде негіз ретінде айтарлықтай ұстамды түстер таңдап, оларды бала өскенде өзгертуге болады. Түрлі-түсті ойыншықтар бөлмеге ерекшелік беріп, оның сәнін келтіреді. Есейгенде ойыншықтарды алып тастасақ, жатын бөлме байсалды, ұстамды бола қалады. Тар бөлмелерді кеңейту үшін айна қосыңыз, ал  Samsung теледидарының алдына бала достарымен ойнай алатын немесе жатып мультфильмдер көре алатын жерге жайылған подиум орнатыңыз. </p>
         <div class="popup-wrapper">
             <div>
                 
             </div>
             <p class="popup-text_small popup-text_small-51">Бормен жазуға арналған қара қабырға сурет салу мен жазу жазуды жақсы көретін балалар үшін керемет шешім. </p>
         </div>
         <div class="popup-wrapper">
             <div>
                 <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid3.png" alt="">
                 <p class="popup-text_small">
                     Белсенді кеңістіктегі орынның барлығын балалар бөлмесімен алмас үшін, сақтауға арналған барлық орындарды балалар бөлмесінде көрінбей тұратын сөресі бар екі шкафпен біріктіруге болады
                 </p>
             </div>
         </div>
         <h4 class="popup-header">Сай келетін Samsung техникасының топтамасы</h4>
         <div class="popup-wrapper popup-wrapper-nogap">
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/wind.png" alt="fridge">
                 <div class="bold popup-itemCard-name">Wind Free кондиционері</div>
                 <div class="popup-itemCard-model">AR12AXAAAWKNER</div>
                 <div class="popup-itemCard-price">494 990  ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AR12AXAAAWKNER" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                     <a href="https://www.samsung.com/kz_kz/air-conditioners/wall-mount/ar9500t-wind-free-ar12axaaawkner/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/air.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">Ауа тазалығышы</div>
                 <div class="popup-itemCard-model">AX60T5080WD/ER</div>
                 <div class="popup-itemCard-price">209 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AX60T5080WD/ER" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                     <a href="https://www.samsung.com/kz_kz/air-care/air-purifier/ax5500k-air-purifier-with-3-way-air-flow/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/freestyle.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">The Freestyle проекторы</div>
                 <div class="popup-itemCard-model">SP-LSP3BLAXCE</div>
                 <div class="popup-itemCard-price">569 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="SP-LSP3BLAXCE" class="btn btn-black popup-itemCard-buy">Себетке қосу</button>
                     <a href="https://www.samsung.com/kz_kz/projectors/the-freestyle/lsp3b-the-freestyle-sp-lsp3blaxce/" class="btn btn-link btn-link-underline">Көбірек білу</a>
                 </div>
             </div>
         </div>
             </div>
              `;
      }
    });
  });

  packListFinal["#pack-1"] = [
    {
      product: "QE55QN85AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Сіздің алатыныңыз:</b><br> SoundBar (Q600A), шаңсорғыш және келесі сатып алуға 10% жеңілдікпен промокод аласыз",
        gift_sku: "HW-Q600A/RU, VC18M21C0VR/EV",
      },
    },
    { product: "AR09BSEANWKNER", badge: false, gift: false },
  ];
  packListFinal["#pack-2"] = [
    {
      product: "SM-S908BZGHSKZ",
      badge: false,
      gift: {
        title: "<b>Сіздің алатыныңыз:</b><br> SoundBar (Q600A)",
        gift_sku: "HW-Q600A/RU",
      },
    },
    { product: "SP-LSP7TUAXCE", badge: false, gift: false },
  ];
  packListFinal["#pack-3"] = [
    {
      product: "QE65QN85AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Сіздің алатыныңыз:</b><br> SoundBar (Q600A), микротолқынды пеш және келесі сатып алуға 15% жеңілдікпен промокод аласыз",
        gift_sku: "HW-Q600A/RU, ME81MRTB/BW",
      },
    },
    { product: "VR50T95735W/EV", badge: false, gift: false },
  ];
  packListFinal["#pack-4"] = [
    {
      product: "QE55QN90AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Сіздің алатыныңыз:</b><br> SoundBar(Q600A) және келесі сатып алуға 10% жеңілдікпен промокод аласыз",
        gift_sku: "HW-Q600A/RU",
      },
    },
    { product: "AX60T5080WD/ER", badge: false, gift: false },
  ];
  packListFinal["#pack-5"] = [
    {
      product: "NV68R5540CB/WT",
      badge: false,
      gift: {
        title:
          "<b>Сіздің алатыныңыз:</b><br> Arbuz-дан сертификат пен келесі сатып алуға 15% жеңілдік промокод",
        gift_sku: "",
      },
    },
    { product: "RS61R5001F8/WT", badge: false, gift: false },
  ];
  packListFinal["#pack-6"] = [
    {
      product: "QE43LS03AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Сіздің алатыныңыз:</b><br> JET 60 Turbo сымсыз шаңсорғышын және Galaxy Buds Pro",
        gift_sku: "VS15A6031R4/EV, SM-R190",
      },
    },
    { product: "SM-G990BLGDSKZ", badge: false, gift: false },
  ];
  packListFinal["#pack-8"] = [
    { product: "SM-S908BDRDSKZ", 
      badge: false,
      gift: {
        title:
          "<b>Сіздің алатыныңыз:</b><br> Galaxy A33, жақтауға жеңілдік, келесі жолы тауар сатып алуға -10% және 100 000 тг промокодтар",
        gift_sku: "SM-A336",
      },
     },
    {
      product: "VR30T85513W/EV",
      badge: false,
      gift: false 
    },
    { product: "QE32LS03TBKXCE", badge: false, 
    gift: false 
  },
  ];
  packListFinal["#pack-9"] = [
    { product: "QE50LS03AAUXCE", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> жақтауға жеңілдік пен келесі жолы тауар сатып алуға -15% промокод",
        gift_sku: "",
      },
     },
    {
      product: "VS20A95973B/EV", badge: false, gift: false 
    },
  ];
  packListFinal["#pack-10"] = [
    { product: "LS27A800NMIXCI", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> Galaxy A33, шаңсорғыш және келесі жолы тауар сатып алуға -10% бен 100000 тг промокодтар",
        gift_sku: "SM-A336, VC18M21C0VR/EV",
      },
     },
    {
      product: "SM-S908BDRDSKZ", badge: false, gift: false 
    },
    {
      product: "AR12BSFCMWKNER", badge: false, gift: false 
    }
  ];
  packListFinal["#pack-11"] = [
    { product: "AR12BSFCMWKNER", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> шаңсорғыш пен келесі жолы тауар сатып алуға -10% промокод",
        gift_sku: "VC18M21C0VR/EV",
      },
     },
    {
      product: "SM-A336BZKGSKZ", badge: false, gift: false 
    }
  ];
  packListFinal["#pack-12"] = [
    { product: "QE50LS03AAUXCE", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> жақтауға жеңілдік пен келесі жолы тауар сатып алуға -10% промокод",
        gift_sku: "",
      },
     },
    {
      product: "AX60T5080WD/ER", badge: false, gift: false 
    }
  ];
  packListFinal["#pack-13"] = [
    { product: "QE43LS05TAUXRU", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> Galaxy Buds Pro, шаңсорғыш пен келесі жолы тауар сатып алуға -10% промокод",
        gift_sku: "SM-R190",
      },
     },
    {
      product: "SM-G990BLGGSKZ", badge: false, gift: false 
    },
    {
      product: "AR12BSFCMWKNER", badge: false, gift: false 
    }
  ];



  recomendationBtns.forEach((rec) => {
    rec.addEventListener("click", (e) => {
      let data = e.target.dataset.rec;
      if (data == "general1") {
        overlay.classList.remove("none");
      //   document.body.style.overflow = "hidden"
        popup.innerHTML = `
        <div class="desktop">
        <span>
        <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
    </span>
    <h4 class="popup-header">Зонирование в интерьере</h4>
    <div class="popup-wrapper">
        <div>
            <p class="bold popup-text-1">Часто возникает желание создать светлое, спокойное и гармоничное пространство, в котором можно расслабиться после рабочего дня. При этом в доме должны быть места для хранения вещей, а также для работы. В таких случаях дизайнер рекомендует делить пространство на приватную (жилую) и общественную зоны.</p>
            <p class="popup-text_small popup-text_small-1">В приватной зоне разместите спальню, ванную комнату, гардероб и даже прачечную, если есть возможность. А в общественной оставьте гостиную, кухню, кабинет, гостевые спальни и санузлы. Таким образом в жилой приватной зоне можно создать желаемую атмосферу расслабления, а общественную снабдить все функциональными вещами.</p>
        </div>
        <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP1.png" alt="">
    </div>
    <div class="popup-wrapper">
        <div>
            <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP2.png" alt="">
            <p>В целом, важно создать несколько мест, где каждый член семьи сможет отвлечься от суеты, расслабиться в компании с приятной книгой или просто созерцая вид за окном. Такие места дают ощущение своего личного пространства, создавая неповторимую энергию дома.</p>
        </div>
        <div>
            <p class="popup-text_small popup-text_small-2">
                Если позволяет планировка, в кухне можно продумать кладовую, которая не будет видна гостям дома, но для владельцев она станет местом для хранения всего необходимого. <br>
                Для создания интимной атмосферы можно использовать элементы, косвенно или прямо отражающие энергию огня. Например, паровой камин. Он выглядит как настоящий, даёт тёплый воздух и дарит невероятное ощущение уюта.
            </p>
            <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP3.png" alt="">
        </div>
    </div>
    <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
    <div class="popup-wrapper">
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge.png" alt="fridge">
            <div class="bold popup-itemCard-name">Паровой шкаф <br> для ухода за одеждой</div>
            <div class="popup-itemCard-model">DF10A9500CG/LP</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: серый</div>
            <button class="color-wrapper">
              <div class="color-inner color-grey"></div>
            </button>
            <div class="popup-itemCard-price">1 199 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="DF10A9500CG/LP" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/washers-and-dryers/airdresser/df9000rm-silver-mirror-df10a9500cg-lp/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalItem2.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">The Frame Art Mode 4K <br> Smart TV (2021)</div>
            <div class="popup-itemCard-model">QE43LS03AAUXCE</div>
            <div class="popup-itemCard-color"><b>Выберите цвет cвоей рамки</b></div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">399 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="QE43LS03AAUXCE" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/lifestyle-tvs/the-frame/ls03a-43-inch-the-frame-art-mode-4k-smart-tv-black-qe43ls03aauxce/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetBot.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Jet Bot AI+ <br> робот пылесос</div>
            <div class="popup-itemCard-model">VR50T95735W/EV</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: Белый</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">499 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="VR50T95735W/EV" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/robot/vr9500t-white-vr50t95735w-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
      </div>
        </div>
  
      <div class="mobile">
      <span>
      <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
  </span>
  <h4 class="popup-header1">Зонирование в интерьере</h4>
  <div class="popup-wrapper">
      <div>
          <p class="bold popup-text-1">Часто возникает желание создать светлое, спокойное и гармоничное пространство, в котором можно расслабиться после рабочего дня. При этом в доме должны быть места для хранения вещей, а также для работы. В таких случаях дизайнер рекомендует делить пространство на приватную (жилую) и общественную зоны.</p>
      </div>
      <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP1.png" alt="">
      <p class="popup-text_small">В приватной зоне разместите спальню, ванную комнату, гардероб и даже прачечную, если есть возможность. А в общественной оставьте гостиную, кухню, кабинет, гостевые спальни и санузлы. Таким образом в жилой приватной зоне можно создать желаемую атмосферу расслабления, а общественную снабдить все функциональными вещами.</p>
  </div>
  <div class="popup-wrapper">
      <div class="popup-parent">
          <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP2mob.png" alt="">
          <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalP3mob.png" alt="">
      </div>
      <div class="popup-wrapper popup-parent">
        <p class="popup-text_small popup-text_small-2">
          Если позволяет планировка, в кухне можно продумать кладовую, которая не будет видна гостям дома, но для владельцев она станет местом для хранения всего необходимого. <br>
      </p>
      </div>
      <p class="popup-text-1mob">Для создания интимной атмосферы можно использовать элементы, косвенно или прямо отражающие энергию огня. Например, паровой камин. Он выглядит как настоящий, даёт тёплый воздух и дарит невероятное ощущение уюта.</p>
      <p class="bold text-left">В целом, важно создать несколько мест, где каждый член семьи сможет отвлечься от суеты, расслабиться в компании с приятной книгой или просто созерцая вид за окном. Такие места дают ощущение своего личного пространства, создавая неповторимую энергию дома.</p>
  </div>
  <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
  <div class="popup-wrapper popup-wrapper-nogap">
      <div class="popup-itemCard">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge.png" alt="fridge">
          <div class="bold popup-itemCard-name">Паровой шкаф <br> для ухода за одеждой</div>
          <div class="popup-itemCard-model">DF10A9500CG/LP</div>
          <div class="popup-itemCard-color"><b>Цвет</b>: серый</div>
          <button class="color-wrapper">
            <div class="color-inner color-grey"></div>
          </button>
          <div class="popup-itemCard-price">1 199 990 ₸</div>
          <div class="buttons buttons-column">
              <button data-id="DF10A9500CG/LP" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
              <a href="https://www.samsung.com/kz_ru/washers-and-dryers/airdresser/df9000rm-silver-mirror-df10a9500cg-lp/" class="btn btn-link btn-link-underline">Узнать больше</a>
          </div>
      </div>
      <div class="popup-itemCard">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/generalItem2.png" alt="generalItem2">
          <div class="bold popup-itemCard-name">The Frame Art Mode 4K <br> Smart TV (2021)</div>
          <div class="popup-itemCard-model">QE43LS03AAUXCE</div>
          <div class="popup-itemCard-color"><b>Выберите цвет cвоей рамки</b></div>
          <button class="color-wrapper">
            <div class="color-inner color-white"></div>
          </button>
          <div class="popup-itemCard-price">399 990 ₸</div>
          <div class="buttons buttons-column">
              <button data-id="QE43LS03AAUXCE" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
              <a href="https://www.samsung.com/kz_ru/lifestyle-tvs/the-frame/ls03a-43-inch-the-frame-art-mode-4k-smart-tv-black-qe43ls03aauxce/" class="btn btn-link btn-link-underline">Узнать больше</a>
          </div>
      </div>
      <div class="popup-itemCard">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetBot.png" alt="generalItem2">
          <div class="bold popup-itemCard-name">Jet Bot AI+ <br> робот пылесос</div>
          <div class="popup-itemCard-model">VR50T95735W/EV</div>
          <div class="popup-itemCard-color"><b>Цвет</b>: Белый</div>
          <button class="color-wrapper">
            <div class="color-inner color-white"></div>
          </button>
          <div class="popup-itemCard-price">499 990 ₸</div>
          <div class="buttons buttons-column">
              <button data-id="VR50T95735W/EV" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
              <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/robot/vr9500t-white-vr50t95735w-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
          </div>
      </div>
    </div>
      </div>
              `;
      } else if (data == "general2") {
        overlay.classList.remove("none");
        popup.innerHTML = `
        <div class="desktop">
              <span>
              <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
          </span>
          <h4 class="popup-header">Отражение хобби</h4>
          <p class="bold">
              Индивидуальность хозяина дома можно подчеркнуть в <br> элементах интерьера. 
          </p>
          <div class="popup-wrapper">
              <div>
                  <p class="popup-text_small popup-text_small-21">Хобби, любовь к музыкальному направлению или яркий вкус в одежде могут стать основанием выбора нейтрального основного цвета с добавлением ярких и нестандартных цветов. Причём ключевой цвет можно показать в разных плоскостях и формах: на кухонных фасадах, в обивке мебели, в декоре. Таким образом у пространства появится не только объединяющий элемент, но и ощущение причастности к создателю.</p>
              </div>
              <div>
                  <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general21.png" alt="">
                  <p class="popup-text_small popup-text_small-22">
                      Существуют интерьерные решения, в которых ванная комната отделяется от спальни полностью стеклянной перегородкой. Благодаря этому свет проникает в ванную. Кроме того, такой подход отражает яркую и свободную составляющую в характере владельца. При желании перегородку можно закрыть шторой, но суть остаётся прежней.
                  </p>
              </div>
          </div>
          <div class="popup-wrapper">
              <div>
                  <img class="popup-img popup-img-22" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general22.png" alt="">
              </div>
              <div>
                  <p class="popup-text popup-text_small-23">Пространство для жизни должно быть максимально комфортным для вас, без оглядки на тренды или рекомендации инфлюенсеров.</p>
              </div>
          </div>
          <img class="popup-img popup-img-23" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general23.png" alt="">
          <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
          <div class="popup-wrapper">
              <div class="popup-itemCard">
                  <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/serif.png" alt="fridge">
                  <div class="bold popup-itemCard-name">The Serif 4K <br> Smart TV</div>
                  <div class="popup-itemCard-model">QE55LS01TAUXRU</div>
                  <div class="popup-itemCard-color"><b>Цвет</b>: белый</div>
                  <button class="color-wrapper">
                    <div class="color-inner color-white"></div>
                  </button>
                  <div class="popup-itemCard-price">499 990 ₸</div>
                  <div class="buttons buttons-column">
                      <button data-id="QE55LS01TAUXRU" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                      <a href="https://www.samsung.com/kz_ru/lifestyle-tvs/the-serif/the-serif-55-inch-4k-smart-tv-ls01t-cloud-white-qe55ls01tauxru/" class="btn btn-link btn-link-underline">Узнать больше</a>
                  </div>
              </div>
              <div class="popup-itemCard">
                  <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
                  <div class="bold popup-itemCard-name">BESPOKE Jet One, <br> Беспроводной пылесос</div>
                  <div class="popup-itemCard-model">VS20A95973B/EV</div>
                  <div class="popup-itemCard-color"><b>Цвет</b>: темно-синий</div>
                  <button class="color-wrapper">
                    <div class="color-inner color-darkblue"></div>
                  </button>
                  <div class="popup-itemCard-price">549 990 ₸</div>
                  <div class="buttons buttons-column">
                      <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                      <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
                  </div>
              </div>
              <div class="popup-itemCard">
                  <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridgeBes.png" alt="generalItem2">
                  <div class="bold popup-itemCard-name">Холодильник BESPOKE <br> с нижней морозильной камерой</div>
                  <div class="popup-itemCard-model">RB38A7B62AP/WT</div>
                  <div class="popup-itemCard-color"><b>Цвет</b>: Белый</div>
                  <button class="color-wrapper">
                    <div class="color-inner color-white"></div>
                  </button>
                  <div class="popup-itemCard-price">529 990 ₸</div>
                  <div class="buttons buttons-column">
                      <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                      <a href="https://www.samsung.com/kz_ru/refrigerators/bottom-mount-freezer/rb7300t-385l-white-rb38a7b62ap-wt/" class="btn btn-link btn-link-underline">Узнать больше</a>
                  </div>
              </div>
          </div>
        </div>
  
        <div class="mobile">
        <span>
        <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
    </span>
    <h4 class="popup-header">Отражение хобби</h4>
    <p class="bold">
        Индивидуальность хозяина дома можно подчеркнуть в <br> элементах интерьера. 
    </p>
    <img class="popup-img popup-img-21" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general21.png" alt="">
        <div>
            <p class="popup-text_small popup-text_small-21">Хобби, любовь к музыкальному направлению или яркий вкус в одежде могут стать основанием выбора нейтрального основного цвета с добавлением ярких и нестандартных цветов. Причём ключевой цвет можно показать в разных плоскостях и формах: на кухонных фасадах, в обивке мебели, в декоре. Таким образом у пространства появится не только объединяющий элемент, но и ощущение причастности к создателю.</p>
        </div>
        <div class="popup-wrapper popup-wrapper2">
          <img class="popup-img popup-img-22" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general22mobb.png" alt="">
          <p class="popup-text_small popup-text_small-22">
              Существуют интерьерные решения, в которых ванная комната отделяется от спальни полностью стеклянной перегородкой. Благодаря этому свет проникает в ванную. Кроме того, такой подход отражает яркую и свободную составляющую в характере владельца. При желании перегородку можно закрыть шторой, но суть остаётся прежней.
          </p>
        </div>
    <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/general23.png" alt="">
    <p class="popup-text bold">Пространство для жизни должно быть максимально комфортным для вас, без оглядки на тренды или рекомендации инфлюенсеров.</p>
    <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
    <div class="popup-wrapper popup-wrapper-nogap">
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/serif.png" alt="fridge">
            <div class="bold popup-itemCard-name">The Serif 4K <br> Smart TV</div>
            <div class="popup-itemCard-model">QE55LS01TAUXRU</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: белый</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">499 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="QE55LS01TAUXRU" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/lifestyle-tvs/the-serif/the-serif-55-inch-4k-smart-tv-ls01t-cloud-white-qe55ls01tauxru/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">BESPOKE Jet One, <br> Беспроводной пылесос</div>
            <div class="popup-itemCard-model">VS20A95973B/EV</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: темно-синий</div>
            <button class="color-wrapper">
              <div class="color-inner color-darkblue"></div>
            </button>
            <div class="popup-itemCard-price">549 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridgeBes.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Холодильник BESPOKE <br> с нижней морозильной камерой</div>
            <div class="popup-itemCard-model">RB38A7B62AP/WT</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: Белый</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">529 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/refrigerators/bottom-mount-freezer/rb7300t-385l-white-rb38a7b62ap-wt/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
    </div>
        </div>
               `;
      } else if (data == "living") {
        overlay.classList.remove("none");
        popup.innerHTML = `
        <div class="desktop"> 
        <span>
          <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
        </span>
        <h4 class="popup-header">Гостиная</h4>
        <div class="popup-wrapper">
          <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom1.png" alt="">
          <div>
            <p class="bold">Яркость гостиной с тёмно-серыми стенами и светлым полом можно добавить за счёт акцентов: терракотовых штор и дивана.</p>
            <p class="popup-text_small">Если же захотелось создать спокойную базу для атмосферы отдыха и расслабленности, можно сделать абсолютно нейтральный интерьер, в который при желании легко добавлять акценты. </p>
          </div>
        </div>
        <p class="popup-text_small popup-text-l1">Для создания светлого и воздушного пространства отлично подойдут окна в пол, выход на террасу и минимум мебели. Светло-бежевые стены контрастируют с полом, покрытым тёмным маслом, что визуально расширяет помещение. Можно продумать и сделать стенку на заказ, заодно подстроив её под размеры телевизора Samsung. Разместите кресло возле эркера, чтобы любоваться садом и низкий диван, чтобы наблюдать за тем, что происходит в комнате и смотреть телевизор.</p>
        <img class="popup-img-l2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom2.png" alt="">
        <div class="popup-lroomWrapper">
          <img class="popup-img-l3" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom3.png" alt="">
          <p class="popup-text_small popup-text-l3">Добавьте в интерьер элементы от стиля джапанди, например, два светильника из рисовой бумаги. Нейтральные цвета для воздуха и открытые окна, чтобы свет заполнял пространство. В эркере поставьте зелень в горшках, чтобы природа стала частью стиля.</p>
        </div>
        <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
        <div class="popup-wrapper">
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/tv.png" alt="fridge">
                <div class="bold popup-itemCard-name">Neo QLED 8K Smart TV <br> (2021) 85"</div>
                <div class="popup-itemCard-model">QE85QN900AUXCE</div>
                <div class="popup-itemCard-price">5 499 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="QE85QN900AUXCE" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                    <a href="https://www.samsung.com/kz_ru/tvs/qled-tv/qn900a-85-inch-neo-qled-8k-smart-tv-qe85qn900auxce/" class="btn btn-link btn-link-underline">Узнать больше</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/soundbar.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">3.1.2ch саундбар <br> (2021)</div>
                <div class="popup-itemCard-model">HW-Q700A/RU</div>
                <div class="popup-itemCard-price">259 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="HW-Q700A/RU" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                    <a href="https://www.samsung.com/kz_ru/audio-devices/soundbar/q700a-black-hw-q700a-ru/" class="btn btn-link btn-link-underline">Узнать больше</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">BESPOKE Jet One, <br> Беспроводной пылесос</div>
                <div class="popup-itemCard-model">VS20A95973B/EV</div>
                <div class="popup-itemCard-color"><b>Цвет</b>: темно-синий</div>
                <button class="color-wrapper">
                <div class="color-inner color-darkblue"></div>
              </button>
                <div class="popup-itemCard-price">549 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                    <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
                </div>
            </div>
        </div>
      </div>

      <div class="mobile">
        <span>
          <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
        </span>
        <h4 class="popup-header">Гостиная</h4>
        <p class="bold popup-text-l1mob">
          Яркость гостиной с тёмно-серыми стенами и светлым полом можно добавить за счёт акцентов: терракотовых штор и дивана.
        </p>
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom1mob.png" alt="">
        <p class="popup-text_small">Если же захотелось создать спокойную базу для атмосферы отдыха и расслабленности, можно сделать абсолютно нейтральный интерьер, в который при желании легко добавлять акценты. </p>
        <img class="popup-img-l2mob" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom2mob.png" alt="">
        <p class="popup-text_small">Для создания светлого и воздушного пространства отлично подойдут окна в пол, выход на террасу и минимум мебели. Светло-бежевые стены контрастируют с полом, покрытым тёмным маслом, что визуально расширяет помещение. Можно продумать и сделать стенку на заказ, заодно подстроив её под размеры телевизора Samsung. Разместите кресло возле эркера, чтобы любоваться садом и низкий диван, чтобы наблюдать за тем, что происходит в комнате и смотреть телевизор.</p>
        <div class="popup-wrapper popup-wrapper-nowrap">
          <img class="popup-img-l3mob" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/lroom3mob.png" alt="">
          <p class="popup-text_small popup-text-l3mob">Добавьте в интерьер элементы от стиля джапанди, например, два светильника из рисовой бумаги. Нейтральные цвета для воздуха и открытые окна, чтобы свет заполнял пространство. В эркере поставьте зелень в горшках, чтобы природа стала частью стиля.</p>
        </div>
        <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
        <div class="popup-wrapper popup-wrapper-nogap">
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/tv.png" alt="fridge">
                <div class="bold popup-itemCard-name">Neo QLED 8K Smart TV <br> (2021) 85"</div>
                <div class="popup-itemCard-model">QE85QN900AUXCE</div>
                <div class="popup-itemCard-price">5 499 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="QE85QN900AUXCE" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                    <a href="https://www.samsung.com/kz_ru/tvs/qled-tv/qn900a-85-inch-neo-qled-8k-smart-tv-qe85qn900auxce/" class="btn btn-link btn-link-underline">Узнать больше</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/soundbar.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">3.1.2ch саундбар <br> (2021)</div>
                <div class="popup-itemCard-model">HW-Q700A/RU</div>
                <div class="popup-itemCard-price">259 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="HW-Q700A/RU" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                    <a href="https://www.samsung.com/kz_ru/audio-devices/soundbar/q700a-black-hw-q700a-ru/" class="btn btn-link btn-link-underline">Узнать больше</a>
                </div>
            </div>
            <div class="popup-itemCard">
                <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/jetone.png" alt="generalItem2">
                <div class="bold popup-itemCard-name">BESPOKE Jet One, <br> Беспроводной пылесос</div>
                <div class="popup-itemCard-model">VS20A95973B/EV</div>
                <div class="popup-itemCard-color"><b>Цвет</b>: темно-синий</div>
                <button class="color-wrapper">
                <div class="color-inner color-darkblue"></div>
              </button>
                <div class="popup-itemCard-price">549 990 ₸</div>
                <div class="buttons buttons-column">
                    <button data-id="RB38A7B62AP/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                    <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
                </div>
            </div>
        </div>
      </div>
              `;
      } else if (data === "kitchen") {
        overlay.classList.remove("none");
        popup.innerHTML = `
        <div class="desktop">
        <span>
        <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
    </span>
    <h4 class="popup-header">Кухня</h4>
    <div class="popup-wrapper">
        <div>
            <p class="bold popup-text bold popup-text-4">Если вы хотите сделать кухню в синем цвете, следует быть осторожнее, чтобы не допустить тяжеловесности пространства. В случае, когда кухня совмещена с гостиной, можно выбрать решение с сочетанием синего цвета с белым. Кроме того, для приятных цветовых акцентов добавьте латунные золотые детали в ручках и светильниках. .</p>
        </div>
        <div>
            <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen1.png" alt="">
            <p class="popup-text_small popup-text_small-42">
                Если в вашей семье много детей и необходимо продумать пространство для совместных завтраков, то можно вынести отдельно остров, как показано на примере. Там же можно разместить мойку и посудомоечную машину для комфортного общения с семьёй в процессе приготовления ужина. <br><br>
                Встройте в кухонный гарнитур духовку Samsung, в которой можно готовить два блюда одновременно без смешения запахов — это особенно удобно для больших семей.
            </p>
        </div>
    </div>
    <div class="popup-wrapper">
        <div>
            <img class="popup-img popup-img-42" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen12.png" alt="">
        </div>
    </div>
    <div class="popup-wrapper popup-wrapper-43">
        <div>
            <p class="popup-text_small popup-text_small-43">Два холодильника не будут бросаться в глаза, если спрятать их за панелями, а в углу можно сделать скрытую полку с выдвижной тумбочкой — в ней легко поместится мелкая бытовая техника. </p>
        </div>
        <img class="popup-img popup-img-43" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen13.png" alt="">
    </div>
    <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
    <div class="popup-wrapper">
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/oven.png" alt="fridge">
            <div class="bold popup-itemCard-name">Духовой Шкаф NV7000N <br> Dual Cook Flex, 75 л</div>
            <div class="popup-itemCard-model">NV75R5641RB/WT</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: чёрный</div>
            <button class="color-wrapper">
              <div class="color-inner color-black"></div>
            </button>
            <div class="popup-itemCard-price">499 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="NV75R5641RB/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/cooking-appliances/ovens/electric-oven-nv75r5641rb-wt/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/microwave.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Микроволновая печь с <br> Грилем</div>
            <div class="popup-itemCard-model">VS20A95973B/EV</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: мята</div>
            <button class="color-wrapper">
              <div class="color-inner color-myta"></div>
            </button>
            <div class="popup-itemCard-price">99 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
        <div class="popup-itemCard">
            <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge2.png" alt="generalItem2">
            <div class="bold popup-itemCard-name">Однодверный <br> морозильник BESPOKE</div>
            <div class="popup-itemCard-model">RZ32T7435AP/WT</div>
            <div class="popup-itemCard-color"><b>Цвет</b>: Белый</div>
            <button class="color-wrapper">
              <div class="color-inner color-white"></div>
            </button>
            <div class="popup-itemCard-price">544 990 ₸</div>
            <div class="buttons buttons-column">
                <button data-id="RZ32T7435AP/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                <a href="https://www.samsung.com/kz_ru/refrigerators/one-door/323l-white-rz32t7435ap-wt/" class="btn btn-link btn-link-underline">Узнать больше</a>
            </div>
        </div>
      </div>
    </div>
  
    <div class="mobile">
    <span>
    <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
  </span>
  <h4 class="popup-header">Кухня</h4>
    <p class="bold popup-text bold popup-text-4">Если вы хотите сделать кухню в синем цвете, следует быть осторожнее, чтобы не допустить тяжеловесности пространства. В случае, когда кухня совмещена с гостиной, можно выбрать решение с сочетанием синего цвета с белым. Кроме того, для приятных цветовых акцентов добавьте латунные золотые детали в ручках и светильниках.</p>
    <img class="popup-img popup-img-42" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen12.png" alt="">
    <p class="popup-text_small">
      Если в вашей семье много детей и необходимо продумать пространство для совместных завтраков, то можно вынести отдельно остров, как показано на примере. Там же можно разместить мойку и посудомоечную машину для комфортного общения с семьёй в процессе приготовления ужина. <br><br>
      Встройте в кухонный гарнитур духовку Samsung, в которой можно готовить два блюда одновременно без смешения запахов — это особенно удобно для больших семей.
  </p>
  <img class="popup-img popup-img-43" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kitchen13.png" alt="">
  <p class="popup-text_small popup-text_small-43">Два холодильника не будут бросаться в глаза, если спрятать их за панелями, а в углу можно сделать скрытую полку с выдвижной тумбочкой — в ней легко поместится мелкая бытовая техника. </p>
  <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
  <div class="popup-wrapper popup-wrapper-nogap">
    <div class="popup-itemCard">
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/oven.png" alt="fridge">
        <div class="bold popup-itemCard-name">Духовой Шкаф NV7000N <br> Dual Cook Flex, 75 л</div>
        <div class="popup-itemCard-model">NV75R5641RB/WT</div>
        <div class="popup-itemCard-color"><b>Цвет</b>: чёрный</div>
        <button class="color-wrapper">
          <div class="color-inner color-black"></div>
        </button>
        <div class="popup-itemCard-price">499 990 ₸</div>
        <div class="buttons buttons-column">
            <button data-id="NV75R5641RB/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
            <a href="https://www.samsung.com/kz_ru/cooking-appliances/ovens/electric-oven-nv75r5641rb-wt/" class="btn btn-link btn-link-underline">Узнать больше</a>
        </div>
    </div>
    <div class="popup-itemCard">
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/microwave.png" alt="generalItem2">
        <div class="bold popup-itemCard-name">Микроволновая печь с <br> Грилем</div>
        <div class="popup-itemCard-model">VS20A95973B/EV</div>
        <div class="popup-itemCard-color"><b>Цвет</b>: мята</div>
        <button class="color-wrapper">
          <div class="color-inner color-myta"></div>
        </button>
        <div class="popup-itemCard-price">99 990 ₸</div>
        <div class="buttons buttons-column">
            <button data-id="VS20A95973B/EV" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
            <a href="https://www.samsung.com/kz_ru/vacuum-cleaners/stick/vs9500al-vc-with-all-in-one-clean-station-blue-vs20a95973b-ev/" class="btn btn-link btn-link-underline">Узнать больше</a>
        </div>
    </div>
    <div class="popup-itemCard">
        <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/fridge2.png" alt="generalItem2">
        <div class="bold popup-itemCard-name">Однодверный <br> морозильник BESPOKE</div>
        <div class="popup-itemCard-model">RZ32T7435AP/WT</div>
        <div class="popup-itemCard-color"><b>Цвет</b>: Белый</div>
        <button class="color-wrapper">
          <div class="color-inner color-white"></div>
        </button>
        <div class="popup-itemCard-price">544 990 ₸</div>
        <div class="buttons buttons-column">
            <button data-id="RZ32T7435AP/WT" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
            <a href="https://www.samsung.com/kz_ru/refrigerators/one-door/323l-white-rz32t7435ap-wt/" class="btn btn-link btn-link-underline">Узнать больше</a>
        </div>
    </div>
  </div>
  </div>
              `;
      } else if (data == "kid") {
        overlay.classList.remove("none");
        popup.innerHTML = `
             <div class="desktop">
             <span>
             <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
         </span>
         <h4 class="popup-header">Детская</h4>
         <div class="popup-wrapper">
             <div>
                 <p class="bold popup-text-1">Интерьер детской может быть частью общего стиля дома. При этом безусловно важно прислушаться к пожеланиям самого юного хозяина комнаты. </p>
                 <p class="popup-text_small popup-text_small-1">Основные цвета в детской можно сделать довольно сдержанными, чтобы она росла вместе с ребёнком. Цветные игрушки станут акцентами и зададут настроение комнате. По мере взросления игрушки можно убрать, и спальня станет аскетичной. В узких комнатах добавьте зеркало для увеличения объёма, а перед телевизором Samsung разместите лежачий подиум, на котором ребёнок будет играть с друзьями или просто с комфортом смотреть мультфильмы.</p>
             </div>
             <div>
                 <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid1.png" alt="">
                 <p class="popup-text_small popup-text_small-51">Меловая чёрная стена станет отличным решением для маленьких любителей рисовать и писать.</p>
             </div>
         </div>
         <div class="popup-wrapper">
             <div>
                 <img class="popup-img popup-img-51" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid2.png" alt="">
             </div>
             <div>
                 <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid3.png" alt="">
                 <p class="popup-text_small">
                     Чтобы не занимать активное пространство детской, все места для хранения можно интегрировать в два шкафа с полками, которые станут практически незаметными на фоне всей детской.
                 </p>
             </div>
         </div>
         <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
         <div class="popup-wrapper">
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/wind.png" alt="fridge">
                 <div class="bold popup-itemCard-name">Cплит-система с <br> технологией WindFree™</div>
                 <div class="popup-itemCard-model">AR12AXAAAWKNER</div>
                 <div class="popup-itemCard-price">494 990  ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AR12AXAAAWKNER" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                     <a href="https://www.samsung.com/kz_ru/air-conditioners/wall-mount/ar9500t-wind-free-ar12axaaawkner/" class="btn btn-link btn-link-underline">Узнать больше</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/air.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">Очиститель <br> воздуха</div>
                 <div class="popup-itemCard-model">AX60T5080WD/ER</div>
                 <div class="popup-itemCard-price">209 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AX60T5080WD/ER" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                     <a href="https://www.samsung.com/kz_ru/air-care/air-purifier/ax5500k-air-purifier-with-3-way-air-flow/" class="btn btn-link btn-link-underline">Узнать больше</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/freestyle.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">Портативный проектор <br> The Freestyle</div>
                 <div class="popup-itemCard-model">SP-LSP3BLAXCE</div>
                 <div class="popup-itemCard-price">569 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="SP-LSP3BLAXCE" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                     <a href="https://www.samsung.com/kz_ru/projectors/the-freestyle/lsp3b-the-freestyle-sp-lsp3blaxce/" class="btn btn-link btn-link-underline">Узнать больше</a>
                 </div>
             </div>
         </div>
             </div>
  
             <div class="mobile">
             <span>
             <img class="popup-close" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/close.png" alt="">
         </span>
         <h4 class="popup-header">Детская</h4>
         <p class="bold popup-text">Интерьер детской может быть частью общего стиля дома. При этом безусловно важно прислушаться к пожеланиям самого юнного хозяина комнаты. </p>
         <img class="popup-img" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid1.png" alt="">
         <p class="popup-text_small">Основные цвета в детской можно сделать довольно сдержанными, чтобы она росла вместе с ребёнком. Цветные игрушки станут акцентами и зададут настроение комнате. По мере взросления игрушки можно убрать, и спальня станет аскетичной. В узких комнатах добавьте зеркало для увеличения объёма, а перед телевизором Samsung разместите лежачий подиум, на котором ребёнок будет играть с друзьями или просто с комфортом смотреть мультфильмы.</p>
         <div class="popup-wrapper">
             <div>
                 
             </div>
             <p class="popup-text_small popup-text_small-51">Меловая чёрная стена станет отличным решением для маленьких любителей рисовать и писать.</p>
         </div>
         <div class="popup-wrapper">
             <div>
                 <img class="popup-img popup-img-2" src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/kid3.png" alt="">
                 <p class="popup-text_small">
                     Чтобы не занимать активное пространство детской, все места для хранения можно интегрировать в два шкафа с полками, которые станут практически незаметными на фоне всей детской.
                 </p>
             </div>
         </div>
         <h4 class="popup-header">Подборка подходящей техники Samsung</h4>
         <div class="popup-wrapper popup-wrapper-nogap">
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/wind.png" alt="fridge">
                 <div class="bold popup-itemCard-name">Cплит-система с <br> технологией WindFree™</div>
                 <div class="popup-itemCard-model">AR12AXAAAWKNER</div>
                 <div class="popup-itemCard-price">494 990  ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AR12AXAAAWKNER" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                     <a href="https://www.samsung.com/kz_ru/air-conditioners/wall-mount/ar9500t-wind-free-ar12axaaawkner/" class="btn btn-link btn-link-underline">Узнать больше</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/air.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">Очиститель <br> воздуха</div>
                 <div class="popup-itemCard-model">AX60T5080WD/ER</div>
                 <div class="popup-itemCard-price">209 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="AX60T5080WD/ER" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                     <a href="https://www.samsung.com/kz_ru/air-care/air-purifier/ax5500k-air-purifier-with-3-way-air-flow/" class="btn btn-link btn-link-underline">Узнать больше</a>
                 </div>
             </div>
             <div class="popup-itemCard">
                 <img src="https://images.samsung.com/is/image/samsung/assets/kz_ru/offer/april-bundle-promo/freestyle.png" alt="generalItem2">
                 <div class="bold popup-itemCard-name">Портативный проектор <br> The Freestyle</div>
                 <div class="popup-itemCard-model">SP-LSP3BLAXCE</div>
                 <div class="popup-itemCard-price">569 990 ₸</div>
                 <div class="buttons buttons-column">
                     <button data-id="SP-LSP3BLAXCE" class="btn btn-black popup-itemCard-buy">Добавить в корзину</button>
                     <a href="https://www.samsung.com/kz_ru/projectors/the-freestyle/lsp3b-the-freestyle-sp-lsp3blaxce/" class="btn btn-link btn-link-underline">Узнать больше</a>
                 </div>
             </div>
         </div>
             </div>
              `;
      }
    });
  });

  let packListFinal = [];
  packListFinal["#pack-1"] = [
    {
      product: "QE55QN85AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> SoundBar (Q600A), пылесос и  промокод 10% на след покупку ",
        gift_sku: "HW-Q600A/RU, VC18M21C0VR/EV",
      },
    },
    { product: "AR09BSEANWKNER", badge: false, gift: false },
  ];
  packListFinal["#pack-2"] = [
    {
      product: "SM-S908BZGHSKZ",
      badge: false,
      gift: {
        title: "<b>Вы получаете:</b><br> SoundBar (Q600A)",
        gift_sku: "HW-Q600A/RU",
      },
    },
    { product: "SP-LSP7TUAXCE", badge: false, gift: false },
  ];
  packListFinal["#pack-3"] = [
    {
      product: "QE65QN85AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> SoundBar (Q600A), микроволновую печь  и промокод 15% на след покупку",
        gift_sku: "HW-Q600A/RU, ME81MRTB/BW",
      },
    },
    { product: "VR50T95735W/EV", badge: false, gift: false },
  ];
  packListFinal["#pack-4"] = [
    {
      product: "QE55QN85AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> SoundBar (Q600A) и  промокод 10% на след покупку ",
        gift_sku: "HW-Q600A/RU",
      },
    },
    { product: "AX60T5080WD/ER", badge: false, gift: false },
  ];
  packListFinal["#pack-5"] = [
    {
      product: "NV68R5540CB/WT",
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> Cертификат от Arbuzи промокод 15% на следующую покупку. ",
        gift_sku: "",
      },
    },
    { product: "RS61R5001F8/WT", badge: false, gift: false },
  ];
  packListFinal["#pack-6"] = [
    {
      product: "QE43LS03AAUXCE",
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> Jet 60 Turbo и наушники Galaxy Buds Pro.",
        gift_sku: "VS15A6031R4/EV, SM-R190",
      },
    },
    { product: "SM-G990BLGDSKZ", badge: false, gift: false },
  ];
  packListFinal["#pack-8"] = [
    { product: "SM-S908BDRDSKZ", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> смартфон Galaxy A33, скидку на рамку, промокоды -10% и 100 000 тг на следующие покупки",
        gift_sku: "SM-A336",
      },
     },
    {
      product: "VR30T85513W/EV",
      badge: false,
      gift: false 
    },
    { product: "QE32LS03TBKXCE", badge: false, 
    gift: false 
  },
  ];
  packListFinal["#pack-9"] = [
    { product: "QE50LS03AAUXCE", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> скидку на рамку и промокод -15% на следующую покупку",
        gift_sku: "",
      },
     },
    {
      product: "VS20A95973B/EV", badge: false, gift: false 
    },
  ];
  packListFinal["#pack-10"] = [
    { product: "LS27A800NMIXCI", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> Galaxy A33, пылесос и промокоды -10% и 100000 тг на следующие покупки.",
        gift_sku: "SM-A336, VC18M21C0VR/EV",
      },
     },
    {
      product: "SM-S908BDRDSKZ", badge: false, gift: false 
    },
    {
      product: "AR12BSFCMWKNER", badge: false, gift: false 
    }
  ];
  packListFinal["#pack-11"] = [
    { product: "AR12BSFCMWKNER", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> пылесос и промокод -10% на следующую покупку",
        gift_sku: "VC18M21C0VR/EV",
      },
     },
    {
      product: "SM-A336BZKGSKZ", badge: false, gift: false 
    }
  ];
  packListFinal["#pack-12"] = [
    { product: "QE50LS03AAUXCE", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> скидку на рамку и промокод -10% на следующую покупку.",
        gift_sku: "",
      },
     },
    {
      product: "AX60T5080WD/ER", badge: false, gift: false 
    }
  ];
  packListFinal["#pack-13"] = [
    { product: "QE43LS05TAUXRU", 
      badge: false,
      gift: {
        title:
          "<b>Вы получаете:</b><br> наушники Galaxy Buds Pro, пылесос и промокод -10% на следующую покупку",
        gift_sku: "SM-R190",
      },
     },
    {
      product: "SM-G990BLGGSKZ", badge: false, gift: false 
    },
    {
      product: "AR12BSFCMWKNER", badge: false, gift: false 
    }
  ];