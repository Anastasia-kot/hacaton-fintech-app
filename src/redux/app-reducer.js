
const SET_CATEGORY = 'SET_CATEGORY';
const TOGGLE_SELECT_CARD_CATEGORY = 'TOGGLE_SELECT_CARD_CATEGORY';
const LOAD_MORE_CARDS = 'LOAD_MORE_CARDS';
const DELETE_CARDS_GOODS = 'DELETE_CARDS_GOODS';
const SET_AUTH = 'SET_AUTH';




let initialState =  {
    isAuth: false,
    categories: [
        { id: 0, category: 'Общие настройки', categoryPath:'mainSettings' },
        { id: 1, category: 'Рецепты', categoryPath: 'recipes' },
        { id: 2, category: 'Товары', categoryPath: 'goods' },
        { id: 3, category: 'Категории', categoryPath: 'categories' },
        { id: 4, category: 'Аналитика', categoryPath: 'analytics' },
    ],
    selectedCategoryId: 'Общие настройки',
    cardsCategories: [
            { id: 0, category: 'Продукты', cardName: 'Еда, напитки, снеки', imgId: 0, isSelected: true },
            { id: 1, category: 'Домашние животные', cardName: 'Корм, ошейники, аксессуары', imgId: 1, isSelected: false },
            { id: 2, category: 'Пикник', cardName: 'Раскладные стол и стулья, плед, угли, мангал, сосиски', imgId: 2, isSelected: false },
    ],
    cardsGoods: [
        { id: 0, ProductName: 'Творог', ProductCost: '40', MerchantName: 'Пятёрочка', MCC: '5441', imgId: 0, src: 'https://cdn.7days.ru/pic/c35/968473/1363918/90.jpg'},
        { id: 1, ProductName: 'Грузди солёные', ProductCost: '120', MerchantName: 'Перекресток', MCC: '5441', imgId: 1, src:'https://www.gastronom.ru/binfiles/images/00000078/00049074.jpg' },
        { id: 2, ProductName: 'Помидоры', ProductCost: '65', MerchantName: 'Перекресток', MCC: '5441', imgId: 2, src:'https://delimanouaru.azureedge.net/media/article/image/cache/580x436/a/-/a-28430_1.jpg' },
        { id: 3, ProductName: 'Лимон', ProductCost: '40', MerchantName: 'Пятёрочка', MCC: '5441', imgId: 3, src:'https://cdn1.ozone.ru/s3/multimedia-3/c1200/6049261431.jpg' },
        { id: 4, ProductName: 'Текила', ProductCost: '1450', MerchantName: 'Пятёрочка', MCC: '5441', imgId: 4, src:'https://img3.goodfon.ru/wallpaper/nbig/f/a7/tekila-olmeko-limon-sol.jpg' },
        { id: 5, ProductName: 'Яйца', ProductCost: '65', MerchantName: 'Магнит', MCC: '5441', imgId: 5, src: 'https://admin.cgon.ru/storage/blog_posts/August2019/sryeQCnXTbpNEcyjVFij.jpg'},
        { id: 6, ProductName: 'Мука', ProductCost: '45', MerchantName: 'Магнит', MCC: '5441', imgId: 6, src:'https://analit-pribor.com.ua/img/news/9.1.jpg' },
        { id: 7, ProductName: 'New product', ProductCost: 'New price', MerchantName: 'MerchantName', MCC: 'MCC code', imgId: 7, src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1f521eUa1nQPzpKUxPQw-BFd8IZIehvxhC38NUi_fFTsXopQy8AAmSNoHbZh-AHZLEY&usqp=CAU' },
    ],
    cardsRecipies: [
        { id: 0, category: 'Салат', cardName: 'Греческий салат', 
            ingridients:[
                'помидоры',
                'огурцы',
                'перец болгарский', 'лук красный', 'сыр фета(брынза)',
                'оливки чёрные без косточки(маслины)',
                'масло оливковое',
                'сок лимонный ',
                'орегано сушёный',
                'соль'
            ], 
            imgId: 0, src:'https://art-lunch.ru/content/uploads/2018/07/Greek_salad_01.jpg'},
        { id: 1, category: 'Коктейль', cardName: 'Банановый коктейль', 
            ingridients: [
                'молоко',
                'бананы',
                'ванильное мороженое',
                'сахар',
            ],
            imgId: 1, src:'https://i1.wp.com/img.iamcook.ru/old/upl/recipes/misc/f8c42e0e539cac4b2c0c2ea426a79faa.jpg'  },
        { id: 2, category: 'Суп', cardName: 'Суп-лапша', 
            ingridients: [
                'яичная лапша',
                'репчатый лук',
                'морковь',
                'куриное яйцо',
                'лавровый лист',
                'черный перец горошком',
                'петрушка',
                'зеленый лук',
                'растительное масло',
                'курица',
            ], imgId: 2, src:'https://vilkin.pro/wp-content/uploads/2020/05/gribnaya-lapsha-770x513.jpg'},
        { id: 3, category: 'Коктейль', cardName: 'Виски-кола',
            ingridients: [
                'американский виски Jack Daniel’s',
                'кола',
                'лёд в кубиках',
            ],
            imgId: 3, src:'https://papinaeda.net/images/shared/2015/01/whisky.jpg' },
        { id: 4, category: 'category', cardName: 'cardName', imgId: 4,     
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1f521eUa1nQPzpKUxPQw-BFd8IZIehvxhC38NUi_fFTsXopQy8AAmSNoHbZh-AHZLEY&usqp=CAU'
        },
    ],
    

};


const appReducer = (state = initialState, action) => {
     switch (action.type) {

        case LOAD_MORE_CARDS:
            let startId = state.cards.length > 0 
            ? state.cards[state.cards.length-1].id + 1
            : 0;

            let newCards = [
                 { id: 0, category: 'Design', cardName: 'SOFA', imgId: 0, isSelected: true },
                 { id: 1, category: 'Branding', cardName: 'KeyBoard', imgId: 1, isSelected: false },
                 { id: 2, category: 'Illustration', cardName: 'Work Media', imgId: 2, isSelected: false },
                 { id: 3, category: 'Motion', cardName: 'DDDone', imgId: 3, isSelected: false },
                 { id: 4, category: 'Design', cardName: 'Abstract', imgId: 4, isSelected: false },
                 { id: 5, category: 'Branding', cardName: 'HandP', imgId: 5, isSelected: false },
                 { id: 6, category: 'Motion', cardName: 'Architect', imgId: 6, isSelected: false },
                 { id: 7, category: 'Design', cardName: 'CalC', imgId: 7, isSelected: false },
                 { id: 8, category: 'Branding', cardName: 'Sport', imgId: 8, isSelected: false },
            ].map(c => { return ({ ...c, id: startId++, isSelected: false, cardName: c.cardName + startId }   )})

            return {
                 ...state,
                cards: [...state.cards, ...newCards]
            }

         case TOGGLE_SELECT_CARD_CATEGORY:
            return { 
                ...state, 
                cardsCategories: state.cardsCategories.map(c => {
                    if (c.id === action.cardID) { return ({ ...c, isSelected: !c.isSelected }) } else return (c);
                })
            }
         case DELETE_CARDS_GOODS:
             return { 
                ...state, 
                 cardsGoods: [...state.cardsGoods.filter(c => (c.id !== action.id))]
            }
            

        case SET_CATEGORY:
            return { ...state, 
                selectedCategoryId: action.category
            }

         case SET_AUTH:
            return { ...state, 
                isAuth: action.isAuth
            }

        default: 
            return state;
    }
}



export let setCategory = (category) => ({ type: SET_CATEGORY, category });
export let loadMoreCards = () => ({ type: LOAD_MORE_CARDS });
export let deleteCards = (id) => ({ type: DELETE_CARDS_GOODS, id });
export let toggleSelectCard = (cardID) => ({ type: TOGGLE_SELECT_CARD_CATEGORY, cardID });
export let setAuth = (isAuth) => ({ type: SET_AUTH, isAuth });
 


export default appReducer;