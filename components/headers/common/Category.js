import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import { Product2, Product3, Product4, Product5, Product6 } from '../../../services/script';
import { Container, Row, Col, Media, Spinner } from 'reactstrap';;
import axios from 'axios';
import { useRouter } from 'next/router';
import { getGame } from '../../../services/game';


const Category = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(Product2);
    const [game, setGame] = useState(0)
    const router = useRouter();

    useEffect(() => {
        function checkCategory() {
            const item = localStorage.getItem('game');        
            if (item) {
                setGame(getGame(item));
            }
            else {
                router.push('/');
            }
        }
        window.addEventListener('storage', checkCategory());
    }, []);

    useEffect(() => {
        if (game == 0 || !game)
            return;
        axios.get(process.env.PRODUCTS_URL+'/category/game', { params: {game: game}})
        .then(result => {
            if (result.status != 200)
                throw "Failed..!";            
            setCategories(result.data.Content);
        })
        .catch(err => {
            console.log(err);
            alert("We are working to solve some network problems...");
        });
        setIsLoading(false);
    }, [game]);

    useEffect(() => {
        console.log(categories);
        setProductLength(categories.length);
    }, [categories]);

    const setProductLength = (length) => {
        if (length === 2)
            setProduct(Product2);
        else if (length === 3)
            setProduct(Product3);
        else if (length === 4)
            setProduct(Product4);
        else if (length === 5)
            setProduct(Product5);
        else if (length === 6)
            setProduct(Product6);
    }

    const ShowLoading = () => ( 
        <Spinner cstyle={{ width: '3rem', height: '3rem' }} type="grow" color="purple"/>
    )

    return (
        <Container>
            <section className="section-b-space border-section border-top-0">
                {isLoading ?
                <ShowLoading />
                :
                <Row>
                    <Col>
                        {product && categories && categories.length > 0 ?
                        <Slider {...product} className="slide-6 no-arrow">
                            {categories.map((category, i) => {
                                return(<div className="category-block" key={i}>
                                    <a href={"/shop?product="+category['name']}>
                                        <div className="category-image"><Media src={category['imageSrc']} alt="" /></div>
                                    </a>
                                    <div className="category-details">
                                        <a href={"/shop?product="+category['name']}>
                                            <h5>{category['name']}</h5>
                                        </a>
                                    </div>
                                </div>)
                            })}
                        </Slider>
                        : ''}
                    </Col>
                </Row>}
            </section>
        </Container>
    )
}

export default Category;