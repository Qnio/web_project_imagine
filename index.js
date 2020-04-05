//---------------------------------------------------------------------------------------------------------
//-----------------------------------------------Data CONTROLLER--------------------------------------------
//---------------------------------------------------------------------------------------------------------

const DataController = (function() {
  const allPictures = [
    {
      name: 'gal-1.png',
      type: 'interior'
    },
    {
      name: 'gal-2.png',
      type: 'exterior'
    },
    {
      name: 'gal-3.png',
      type: 'commercial'
    },
    {
      name: 'gal-4.png',
      type: 'interior'
    },
    {
      name: 'gal-5.png',
      type: 'exterior'
    },
    {
      name: 'gal-6.png',
      type: 'commercial'
    },
    {
      name: 'gal-7.png',
      type: 'interior'
    },
    {
      name: 'gal-8.jpg',
      type: 'exterior'
    },
    {
      name: 'gal-9.jpg',
      type: 'commercial'
    }
  ];
  return {
    getPictures: function() {
      return allPictures;
    }
  };
})();

//---------------------------------------------------------------------------------------------------------
//-----------------------------------------------UI CONTROLLER--------------------------------------------
//---------------------------------------------------------------------------------------------------------

const UIController = (function() {
  const DOMStrings = {
    galleryTypeList: '.section-portfolio__header-filter',
    all: '.all',
    gallery: '.gallery'
  };

  return {
    getDOMStrings: function() {
      return DOMStrings;
    },

    renderGallery: function(objData, type = 'all') {
      let html = [];
      if (type === 'all') {
        objData.forEach(el => {
          html.push(
            `<figure class="gallery__item">
            <img src="img/${el.name}" alt="${el.type}" class="gallery__img" />
          </figure>`
          );
        });
      } else if (type === 'interior') {
        objData.forEach(el => {
          if (el.type === 'interior') {
            html.push(
              `<figure class="gallery__item">
              <img src="img/${el.name}" alt="${el.type}" class="gallery__img" />
            </figure>`
            );
          }
        });
      } else if (type === 'exterior') {
        objData.forEach(el => {
          if (el.type === 'exterior') {
            html.push(
              `<figure class="gallery__item">
              <img src="img/${el.name}" alt="${el.type}" class="gallery__img" />
            </figure>`
            );
          }
        });
      } else if (type === 'commercial') {
        objData.forEach(el => {
          if (el.type === 'commercial') {
            html.push(
              `<figure class="gallery__item">
              <img src="img/${el.name}" alt="${el.type}" class="gallery__img" />
            </figure>`
            );
          }
        });
      }

      html.forEach(el =>
        document
          .querySelector(DOMStrings.gallery)
          .insertAdjacentHTML('beforeend', el)
      );
    },

    clearListOfItems: function(anchor) {
      let element = document.querySelector(anchor);

      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
  };
})();

//---------------------------------------------------------------------------------------------------------
//-----------------------------------------------APP CONTROLLER--------------------------------------------
//---------------------------------------------------------------------------------------------------------

const APPController = (function(DataCtrl, UICtrl) {
  let DOM = UICtrl.getDOMStrings();
  let images = DataCtrl.getPictures();

  let setupEventListeners = function() {
    document
      .querySelector(DOM.galleryTypeList)
      .addEventListener('click', selectTypeOfGallery);
  };

  let selectTypeOfGallery = function() {
    let type = event.target.innerHTML.toLowerCase();
    UICtrl.clearListOfItems(DOM.gallery);
    UICtrl.renderGallery(images, type);
  };

  let displayGallery = function() {
    UICtrl.clearListOfItems(DOM.gallery);
    UICtrl.renderGallery(images);
  };

  return {
    init: function() {
      console.log('APP started!');
      setupEventListeners();
      console.log(images);
      displayGallery();
    }
  };
})(DataController, UIController);

APPController.init();
