import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Media, Modal, ModalBody, ModalHeader, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import CartContext from '../../../helpers/cart';

const ProductItem = ({ product, addCart, addWishlist, addCompareList }) => {

    // eslint-disable-next-line
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const plusQty = cartContext.plusQty;
    const minusQty = cartContext.minusQty;
    const quantity = cartContext.quantity;
    const setQuantity = cartContext.setQuantity;
    const [image, setImage] = useState('');
    const [modal, setModal] = useState(false);

    const [modalCompare, setModalCompare] = useState(false);
    const [serverVariant, setServerVariant] = useState({factor: 1.0});    
    const [customizes, setCustomizes] = useState([]);
    const [customizeFactor, setCustomizeFactor] = useState(1.0);

    const toggleCompare = () => setModalCompare(!modalCompare);
    const toggle = () => setModal(!modal);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;

    useEffect(() => {
        let factor = 1;
        for (var i =0; i < customizes.length; i++) {
            let value = customizes[i]['value'][0];
            factor = factor * value['factor'];
        }
        setCustomizeFactor(factor);
    },
    [customizes]);

    useEffect(() => {
        if (!modal) {
            setCustomizes([]);
            setServerVariant({factor: 1.0});
        }
    }, [modal]);

    const onClickHandle = (img) => {
        setImage(img);
    }

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    const clickProductDetail = () => {

        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }

    const onChangeModalFactor = (e) => {
        if (e.target.value == "clean") {
            setServerVariant({factor:1.0});
        }
        else if (e.target.value &&
            e.target.value >= 0) {
            setServerVariant(product.variants[e.target.value]);
        }
    };

    const onChangeModalExtra = (e) => {
        if (e.target.value == "clean") {
            var customizeFiltered = customizes.filter(x => x.name != product.customizes[e.target.name]['name']);
            setCustomizes(customizeFiltered);
        }
        else if (e.target.name &&
            e.target.name >= 0 &&
            e.target.value &&
            e.target.value >= 0) {
            let customize = {
                name: product.customizes[e.target.name]['name'],
                value: [product.customizes[e.target.name]['value'][e.target.value]]
            };
            var customizeFiltered = customizes.filter(x => x.name != product.customizes[e.target.name]['name']);
            customizeFiltered.push(customize);            
            setCustomizes(customizeFiltered);
        }
    };

    const handleClickAddCart = (e) => {
        let hasVariants = product['variants'] && Array(product['variants']).filter(v => v['factor'] != 1);
        let hasCustomize = product['customizes'] && product['customizes'].length > 0;
        if (hasVariants || hasCustomize) {
            setModal(true);
        }
        else {
            addCart(customizes, serverVariant);
        }
    }

    const handleAddCart = (e) => {
        let hasVariants = serverVariant['name'] == undefined;
        if (hasVariants) {
            toast("Please, select one of each options!");
        }
        else {
            addCart(customizes, serverVariant);
        }
    }

    let RatingStars = []
    for (var i = 0; i < product.rating; i++) {
        RatingStars.push(<i className="fa fa-star" key={i}></i>)
    }

    return (
        <>
            <div className="product-box product-wrap" key={i}>
                <div className="img-wrapper">
                    <div className="lable-block">
                        {(product.tags.includes('new') === true) ? <span className="lable3">new</span> : ''}
                        {(product.sale === true) ? <span className="lable4">on sale</span> : ''}

                    </div>
                    <div className="front" onClick={clickProductDetail}>
                        <Media src={`${image ?
                            image : product.images[0].src
                            }`}
                            className="img-fluid"
                            alt="" />
                    </div>
                    <div className="back" onClick={clickProductDetail}>
                        <Media src={`${image ?
                            image : product.images[0].src
                            }`}
                            className="img-fluid"
                            alt="" />
                    </div>

                    {product.images[1] === 'undefined' ?
                        <div className="back" onClick={clickProductDetail}>
                            <Media src={`${image ?
                                image : product.images[1].src
                                }`}
                                className="img-fluid"
                                alt="" />
                        </div>
                        :
                        ''}

                    <div className="cart-detail">
                        <a href={null} title="Add to Wishlist" onClick={addWishlist}>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href={null} data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={toggle}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                        {/* <a href={null} title="Compare" onClick={toggleCompare}>
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </a> */}
                        <Modal isOpen={modalCompare} toggle={toggleCompare} size="lg" centered>
                            <ModalHeader toggle={toggleCompare}>Quick View</ModalHeader>
                            <ModalBody>
                                <Row className="compare-modal">
                                    <Col lg="12">
                                        <div className="media">
                                            <Media src={`${product.variants ?
                                                image ? image : product.images[0].src
                                                : product.images[0].src
                                                }`} alt="" className="img-fluid" />
                                            <div className="media-body align-self-center text-center">
                                                <h5><i className="fa fa-check"></i>Item <span>{product.title}</span>
                                                    <span>successfully added to your Compare list</span>
                                                </h5>
                                                <div className="buttons d-flex justify-content-center">
                                                    <Link href={"/account/compare?game="+router.query.game}>
                                                        <a href={null} className="btn-sm btn-solid" onClick={addCompareList}>
                                                            View Compare list
                                                    </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ModalBody>
                        </Modal>
                    </div>
                    {product.images ?
                        <ul className="product-thumb-list">
                            {product.images.map((img, i) =>
                                <li className={`grid_thumb_img ${img.src === image ? 'active' : ''}`} key={i}>
                                    <a href={null} title="Add to Wishlist">
                                        <Media src={`${img.src}`} alt="wishlist" onClick={() => onClickHandle(img.src)} />
                                    </a>
                                </li>
                            )}
                        </ul> : ''}
                </div>
                <div className="product-info">
                    <div className="rating">
                        {RatingStars}
                    </div>
                    <h6>{product.title}</h6>
                    <h4>{currency.symbol}{((product.price - (product.price * product.discount / 100))*currency.value).toFixed(2)}
                        {product.sale ? <del><span className="money">{currency.symbol}{(product.price * currency.value).toFixed(2) }</span></del> : ''}
                    </h4>
                    <div className="add-btn">
                        <a href="#!" onClick={handleClickAddCart} className="btn btn-outline">
                            <i className="fa fa-shopping-cart"></i> add to cart
                                                    </a>
                    </div>
                </div>
                <Modal isOpen={modal} toggle={toggle} className="quickview-modal" size="lg" centered>
                    <ModalBody>
                        <Row>
                            <Col lg="6" xs="12">
                                <div className="quick-view-img">
                                    <Media src={`${product.variants ?
                                        image ? image : product.images[0].src
                                        : product.images[0].src
                                        }`} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col lg="6" className="rtl-text">
                                <div className="product-right">
                                    <h2> {product.title} </h2>
                                    <h3>{currency.symbol}{(product.price * currency.value * serverVariant.factor * customizeFactor - (product.price * product.discount / 100)).toFixed(2) }</h3>
                                    <div className="border-product">
                                        <h6 className="product-title">Server</h6>
                                        {product.variants ?
                                            <Input type="select" name="server" onChange={onChangeModalFactor} defaultValue={()=> {setModalServerDefault('')}}>
                                                <option value="clean">Choose a server...</option>
                                                {product.variants.map((server, i) => {
                                                    
                                                    return (<option key={i} value={i}>{server.name} x {server.factor}</option>)
                                                })
                                            }
                                            </Input>: ''}
                                    </div>
                                    {product['customizes'] && product['customizes'].length > 0 ?
                                     <div className="border-product">
                                        <h6 className="product-title">Extra</h6>
                                        {product.customizes.map((item, ix) => {
                                            return(<div key={ix}>
                                                <b>{(ix+1)+".  " +item.name}</b>
                                                <Input type="select" name={ix} onChange={onChangeModalExtra}>
                                                    <option value="clean">Choose an option...</option>
                                                    {item.value.map((custom, i) => {                                                    
                                                        return (<option key={i} value={i}>{custom.name} x {custom.factor}</option>)
                                                    })
                                                }
                                                </Input>
                                            </div>)
                                        })
                                        }
                                    </div>
                                    : ''}
                                    <div className="border-product">
                                        <h6 className="product-title">Description</h6>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="product-description border-product">
                                        {product.size ?
                                            <div className="size-box">
                                                <ul>
                                                    {product.size.map((size, i) => {
                                                        return <li key={i}><a href={null}>{size}</a></li>
                                                    })}
                                                </ul>
                                            </div> : ''}
                                        <h6 className="product-title">quantity</h6>
                                        <div className="qty-box">
                                            <div className="input-group">
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                                        <i className="fa fa-angle-left"></i>
                                                    </button>
                                                </span>
                                                <input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">
                                                        <i className="fa fa-angle-right"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-buttons">
                                        <button className="btn btn-solid" onClick={handleAddCart} >add to cart</button>
                                        {/* <button className="btn btn-solid" onClick={clickProductDetail} >View detail</button> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}


export default ProductItem;