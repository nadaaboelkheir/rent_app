import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native'
import { Images } from '../../constants'

// const 

const initState = {

    dark: false,
    FirstTime:true,
    sign:false,
    
    Categories: [
        {
            category_id:1,
            category_name: "لــابــات",
            categories_image: Images.user_Image,
            category_show:1,
            Products: [
                {
                    id:1 , 
                    Available_Quantity: 8,
                    Saled: 0,
                    TopRent: true,
                    Deduction_Value: 20,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
             
                {
                    id:2,
                    Available_Quantity: 5,
                    Saled: 3,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                         Images.Banner1,
                         Images.Banner2
                    ],
                    Deduction_Value: 30,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:3,
                    Available_Quantity: 8,
                    Saled: 5,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 50,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed Elsayed',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:4,
                    Available_Quantity: 15,
                    Saled: 0,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 70,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed hassan',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
            ]
        },
        {
            category_id:2,
            category_name: "موبايلات",
            categories_image: Images.user_Image,
            category_show:1,
            Products: [
                {
                    id:1 , 
                    Available_Quantity: 8,
                    Saled: 0,
                    TopRent: true,
                    Deduction_Value: 20,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
             
                {
                    id:2,
                    Available_Quantity: 5,
                    Saled: 3,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                         Images.Banner1,
                         Images.Banner2
                    ],
                    Deduction_Value: 30,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:3,
                    Available_Quantity: 8,
                    Saled: 5,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 50,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed Elsayed',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:4,
                    Available_Quantity: 15,
                    Saled: 0,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 70,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed hassan',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
            ]
        },
        {
            category_id:3,
            category_name: "ثلاجات",
            categories_image: Images.user_Image,
            category_show:1,
            Products: [
                {
                    id:1 , 
                    Available_Quantity: 8,
                    Saled: 0,
                    TopRent: true,
                    Deduction_Value: 20,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
             
                {
                    id:2,
                    Available_Quantity: 5,
                    Saled: 3,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                         Images.Banner1,
                         Images.Banner2
                    ],
                    Deduction_Value: 30,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:3,
                    Available_Quantity: 8,
                    Saled: 5,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 50,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed Elsayed',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:4,
                    Available_Quantity: 15,
                    Saled: 0,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 70,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed hassan',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
            ]
        },
        {
            category_id:4,
            category_name: "سخانات",
            categories_image: Images.user_Image,
            category_show:1,
            Products: [
                {
                    id:1 , 
                    Available_Quantity: 8,
                    Saled: 0,
                    TopRent: true,
                    Deduction_Value: 20,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
             
                {
                    id:2,
                    Available_Quantity: 5,
                    Saled: 3,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                         Images.Banner1,
                         Images.Banner2
                    ],
                    Deduction_Value: 30,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                   
                },
                {
                    id:3,
                    Available_Quantity: 8,
                    Saled: 5,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 50,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed Elsayed',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:4,
                    Available_Quantity: 15,
                    Saled: 0,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 70,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed hassan',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
            ]
        },
        {
            category_id:1,
            category_name: "لــابــات",
            categories_image: Images.user_Image,
            category_show:1,
            Products: [
                {
                    id:1 , 
                    Available_Quantity: 8,
                    Saled: 0,
                    TopRent: true,
                    Deduction_Value: 20,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
             
                {
                    id:2,
                    Available_Quantity: 5,
                    Saled: 3,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                         Images.Banner1,
                         Images.Banner2
                    ],
                    Deduction_Value: 30,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed tt',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:3,
                    Available_Quantity: 8,
                    Saled: 5,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 50,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed Elsayed',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
                {
                    id:4,
                    Available_Quantity: 15,
                    Saled: 0,
                    TopRent: true,
                    Images: [
                        Images.user_Image,
                        Images.Banner1,
                        Images.Banner2
                    ],
                    Deduction_Value: 70,
                    item_price: 40,
                    finallyPrice: 32,
                    item_show:"1",
                    item_name: 'لابتوب',
                    RentInfo: {
                        Rented_Name: 'ahmed hassan',
                        commercial_number: 5655252555,
                        Location: 'طنطا',
                        DateOfRentJoin: '15/1/2022',
                        Ad_Number: 21021255,
                        Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
                    }
                },
            ]
        },
    ],
    ProductArray:[
        {
            id:1 , 
            Available_Quantity: 8,
            Saled: 0,
            TopRent: true,
            Deduction_Value: 20,
            Images: [
                Images.user_Image,
                Images.Banner1,
                Images.Banner2
            ],
            item_price: 40,
            finallyPrice: 32,
            item_name: 'لابتوب',
            RentInfo: {
                Rented_Name: 'ahmed tt',
                commercial_number: 5655252555,
                Location: 'طنطا',
                DateOfRentJoin: '15/1/2022',
                Ad_Number: 21021255,
                Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
            }
        },
     
        {
            id:2,
            Available_Quantity: 5,
            Saled: 3,
            TopRent: true,
            Images: [
                Images.user_Image,
                 Images.Banner1,
                 Images.Banner2
            ],
            Deduction_Value: 30,
            item_price: 40,
            finallyPrice: 32,
            item_name: 'لابتوب',
            RentInfo: {
                Rented_Name: 'ahmed tt',
                commercial_number: 5655252555,
                Location: 'طنطا',
                DateOfRentJoin: '15/1/2022',
                Ad_Number: 21021255,
                Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
            }
        },
        {
            id:3,
            Available_Quantity: 8,
            Saled: 5,
            TopRent: true,
            Images: [
                Images.user_Image,
                Images.Banner1,
                Images.Banner2
            ],
            Deduction_Value: 50,
            item_price: 40,
            finallyPrice: 32,
            item_name: 'لابتوب',
            RentInfo: {
                Rented_Name: 'ahmed Elsayed',
                commercial_number: 5655252555,
                Location: 'طنطا',
                DateOfRentJoin: '15/1/2022',
                Ad_Number: 21021255,
                Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
            }
        },
    ]
}




const ProductSlice = createSlice(
    {
        name: 'Product',
        initialState: initState,
        reducers: {
           
            UpdateDarkMode: (state, action) => {
                state.dark = action.payload
            },
            UpdateFirstLogin: (state, action) => {
                state.FirstTime = action.payload
            },
            UpdateSigned: (state, action) => {
                state.sign = action.payload
            },
        },
        extraReducers:{
         
        }
    }
)
export default ProductSlice.reducer
export const { 
     UpdateDarkMode,
     UpdateFirstLogin,
     UpdateSigned } = ProductSlice.actions


// Categories: [
//     {

//         id:1,
//         name: "لــابــات",
//         Image: Images.user_Image,

//         Products: [
//             {
//                 id:1 , 

//                 Available_Quantity: 8,
//                 Saled: 0,
//                 TopRent: true,
//                 Deduction_Value: 20,
//                 Images: [
//                     Images.user_Image,
//                     Images.Banner1,
//                     Images.Banner2
//                 ],
//                 Price: 40,
//                 finallyPrice: 32,
//                 item_name: 'لابتوب',
//                 RentInfo: {
//                     Rented_Name: 'ahmed tt',
//                     commercial_number: 5655252555,
//                     Location: 'طنطا',
//                     DateOfRentJoin: '15/1/2022',
//                     Ad_Number: 21021255,
//                     Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
//                 }
//             },
            
//             {
//                 id:2,
//                 Available_Quantity: 5,
//                 Saled: 3,
//                 TopRent: true,
//                 Images: [
//                     Images.user_Image,
//                      Images.Banner1,
//                      Images.Banner2
//                 ],
//                 Deduction_Value: 30,
//                 Price: 40,
//                 finallyPrice: 32,
//                 item_name: 'لابتوب',
//                 commercial_number: 5655252555,
//                 Location: 'طنطا',
//                 Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
//             },

//             {
//                 id:3,
//                 Available_Quantity: 8,
//                 Saled: 5,
//                 TopRent: true,
//                 Images: [
//                     Images.user_Image,
//                     Images.Banner1,
//                     Images.Banner2
//                 ],
//                 Deduction_Value: 50,
//                 Price: 40,
//                 finallyPrice: 32,
//                 item_name: 'لابتوب',
//                 RentInfo: {
//                     Rented_Name: 'ahmed Elsayed',
//                     commercial_number: 5655252555,
//                     Location: 'طنطا',
//                     DateOfRentJoin: '15/1/2022',
//                     Ad_Number: 21021255,
//                     Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
//                 }
//             },

//             {
//                 id:4,
//                 Available_Quantity: 15,
//                 Saled: 0,
//                 TopRent: true,
//                 Images: [
//                     Images.user_Image,
//                     Images.Banner1,
//                     Images.Banner2
//                 ],
//                 Deduction_Value: 70,
//                 Price: 40,
//                 finallyPrice: 32,
//                 item_name: 'لابتوب',
//                 RentInfo: {
//                     Rented_Name: 'ahmed hassan',
//                     commercial_number: 5655252555,
//                     Location: 'طنطا',
//                     DateOfRentJoin: '15/1/2022',
//                     Ad_Number: 21021255,
//                     Product_Identification: 'agsdhhhhhhhhhhhhhhhhhk ahg hafsdhg g gkhgsahfgahskdg fhgash ,fh gkag fga hkgkf agg h',
//                 }
//             },
//         ]
//     },

// ],