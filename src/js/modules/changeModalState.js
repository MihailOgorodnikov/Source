import checkNumlnputs from './checkNumlnputs';


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumlnputs('#width');
    checkNumlnputs('#height');

    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :

                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {

                        }else {

                        }
                        break;
                    case 'SELECT' :

                        break;
                }
                
            });
        });
    }

    bindActionToElems('click', windowForm, 'from');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;