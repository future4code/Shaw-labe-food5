import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../global/GlobalContext';
import Header from '../../components/Header/Header'
import { CardsContainer, Categories, CategoryTitle, InfoDiv, Infos, Logo, Name, PageContainer, RestaurantContainer, RestaurantInfo } from './styled';
import CardProduct from '../../components/cardProduct/CardProduct';

const restaurant = {
    "products": [
        {
            "id": "3vcYYSOEf8dKeTPd7vHe",
            "name": "Pastel",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
            "category": "Pastel",
            "description": "Pastel autêntico, feito na hora!",
            "price": 3
        },
        {
            "id": "5omTFSOBYiTqeiDwhiBx",
            "description": "Esfiha deliciosa, receita secreta do Habibs.",
            "price": 1,
            "category": "Salgado",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
            "name": "Bibsfiha queijo"
        },
        {
            "id": "5qVBu990QDEcBPOzitMy",
            "name": "Kibe",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
            "description": "Kibe árabe de verdade",
            "price": 5.5,
            "category": "Salgado"
        },
        {
            "id": "6ZNrnQB0CgCZHf31xCRu",
            "category": "Lanche",
            "description": "Da Arábia para o mundo!",
            "name": "Beirute",
            "price": 22.9,
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg"
        },
        {
            "id": "8CKulpHeAAm1QQqWpReI",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg",
            "description": "Batata frita crocante e sequinha.",
            "name": "Batata Frita",
            "price": 9.5,
            "category": "Acompanhamento"
        },
        {
            "id": "KqHR80VJp9my0eBLEHvk",
            "category": "Pizza",
            "name": "Pizza",
            "description": "Pizza crocante de diversos sabores",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg",
            "price": 31.9
        },
        {
            "id": "XHhajKAtvIH2Dq6F83PX",
            "category": "Bebida",
            "name": "Suco",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg",
            "description": "Laranja, Acerola ou Maçã",
            "price": 7.9
        },
        {
            "id": "bEj2JorVLWo86iJf7OF9",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/f62f7746-4888-4e81-a9b0-93bf5453c51a/202103180149_woHq_s.jpg",
            "price": 4,
            "description": "Coca cola, Sprite ou Guaraná",
            "category": "Bebida",
            "name": "Refrigerante"
        },
        {
            "id": "fMMfstMTxeos8NWTS4j1",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907151009_76679579.jpg",
            "price": 1,
            "category": "Salgado",
            "name": "Bibsfiha frango",
            "description": "Esfiha deliciosa, receita secreta do Habibs."
        },
        {
            "id": "xhq0QgZXklGSmaBDy6KQ",
            "description": "Esfiha deliciosa, receita secreta do Habibs.",
            "name": "Bibsfiha carne",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
            "category": "Salgado",
            "price": 1
        }
    ],
    "id": "1",
    "address": "Rua das Margaridas, 110 - Jardim das Flores",
    "shipping": 6,
    "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de",
    "category": "Árabe",
    "deliveryTime": 60,
    "name": "Habibs"
}
const RestaurantPage = () => {
    const [quantity, setQuantity] = useState(2)
    const [categories, setCategories] = useState([])
    const { states, setters } = useContext(GlobalContext)
    const { cart } = states;
    const { setCart } = setters;
    useEffect(() => {
        const allCategories = restaurant.products.map((product) => product.category)
        const categories = allCategories.filter((cur, i) => {
            return allCategories.indexOf(cur) === i
        })
        setCategories(categories)
    }, [])
    return (
        <PageContainer>
            <Header title={'Restaurante'} />
            <RestaurantContainer>
                <Logo src={restaurant.logoUrl} />
                <RestaurantInfo>
                    <Name>{restaurant.name}</Name>
                    <Infos>{restaurant.category}</Infos>
                    <InfoDiv>
                        <Infos>{restaurant.deliveryTime} min</Infos>
                        <Infos>Frete R${restaurant.shipping},00</Infos>
                    </InfoDiv>
                    <Infos>{restaurant.address}</Infos>
                </RestaurantInfo>

                {
                    categories.map((item, index) => {
                        return (
                            <Categories key={index}>
                                <CategoryTitle>{item}</CategoryTitle>
                                <CardsContainer>

                                    {
                                        restaurant.products.map((product) => {
                                            if (item === product.category) {
                                                return (
                                                    <CardProduct product={product} />
                                                )
                                            }
                                        })
                                    }
                                </CardsContainer>
                            </Categories>
                        )
                    })
                }


            </RestaurantContainer>
        </PageContainer>
    )
}

export default RestaurantPage