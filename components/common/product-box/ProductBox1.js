import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Media, Modal, ModalBody, Input } from 'reactstrap';
import CartContext from '../../../helpers/cart';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const ProductItem = ({ product, addCart, backImage, des, addWishlist, cartClass, productDetail, addCompare, title }) => {
    // eslint-disable-next-line
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const plusQty = cartContext.plusQty;
    const minusQty = cartContext.minusQty;
    const quantity = cartContext.quantity;
    const setQuantity = cartContext.setQuantity;

    const [image, setImage] = useState('');
    const [modal, setModal] = useState(false);
    const [modalServer, setModalServer] = useState('');
    const [modalCompare, setModalCompare] = useState(false);
    const toggleCompare = () => setModalCompare(!modalCompare);
    const toggle = () => setModal(!modal);
    const uniqueTags = [];

    const onClickHandle = (img) => {
        setImage(img);
    }

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const clickProductDetail = () => {

        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }

    const variantChangeByColor = (imgId, product_images) => {
        product_images.map((data) => {
            if (data.image_id == imgId) {
                setImage(data.src);
            }
        })
    }

    const getFactorForItem = (variants) => {
        console.log(modalServer);
        for(let j = 0; j < variants.length; j++){
            if (variants[j].name == modalServer) {
                return variants[j].factor;
            }
        }

        return 1.0
    };

    const onChangeModalFactor = (e) => {
        console.log(e.target.value);
        let server = e.target.value.split(' ')[0];
        setModalServer(server);
    };

    let RatingStars = []
    let rating = 5;
    for (var i = 0; i < rating; i++) {
        RatingStars.push(<i className="fa fa-star" key={i}></i>)
    }

    return (
        <div className="product-box product-wrap">
            <div className="img-wrapper">
                <div className="lable-block">
                    {(product.new === true) ? <span className="lable3">new</span> : ''}
                    {(product.sale === true) ? <span className="lable4">on sale</span> : ''}
                </div>
                <div className="front" onClick={clickProductDetail}>
                    <Media src={`${image ?
                        image : product.images[0].src
                        }`}
                        className="img-fluid"
                        alt="" />
                </div>
                {backImage ?
                    product.images[0] === 'undefined' ?
                        'false'
                        :
                        <div className="back" onClick={clickProductDetail}>
                            <Media src={`${image ?
                                image : product.images[0].src
                                }`}
                                className="img-fluid m-auto"
                                alt="" />
                        </div>
                    : ''
                }

                <div className={cartClass}>
                    <button title="Add to cart" onClick={addCart}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                    <a href={null} title="Add to Wishlist" onClick={addWishlist}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </a>
                    <a href={null}
                        title="Quick View"
                        onClick={toggle}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                    <a href={null}
                        title="Compare"
                        onClick={toggleCompare} >
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                    </a>
                    <Modal isOpen={modalCompare} toggle={toggleCompare}  size="lg" centered>
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
                                                <Link href="/account/compare.html">
                                                    <a href={null} className="btn-sm btn-solid" onClick={addCompare}>
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
            <div className={`product-detail ${productDetail}`} >
                <div>
                    <h6>{product.title}</h6>
                    {des ?
                        <p>{product.description}</p>
                        : ''
                    }
                    <h4>{currency.symbol}{((product.price - (product.price * product.discount / 100))*currency.value).toFixed(2)}
                        {product.sale ? <del><span className="money">{currency.symbol}{(product.price * currency.value).toFixed(2)}</span></del> : '' }
                    </h4>

                    {product.variants.map(vari => {
                        var findItem = uniqueTags.find(x => x.color === vari.color);
                        if (!findItem)
                            uniqueTags.push(vari);
                    })}

                    {
                        product.type === 'jewellery' || product.type === 'nursery' || product.type === 'beauty' || product.type === 'electronics' || product.type === 'goggles' || product.type === 'watch' || product.type === 'pets' ?
                            ''
                            :
                            <>
                                {title !== 'Product style 4' && uniqueTags[0].color ?
                                    <ul className="color-variant">
                                        {uniqueTags.map((vari, i) => {
                                            return (
                                                <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, product.images)}></li>)
                                        })}
                                    </ul> : ''}
                            </>
                    }

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
                                    <h3>{currency.symbol}{(product.price * currency.value * getFactorForItem(product.variants)).toFixed(2) }</h3>
                                    {product.variants ?
                                        <Input type="select" name="Server" onChange={onChangeModalFactor} defaultValue={()=> {setModalServerDefault('')}}>
                                            <option>Choose a server...</option>
                                            {product.variants.map((server, i) => {
                                                
                                                return (<option key={i} value={server.name}>{server.name} x {server.factor}</option>)
                                            })
                                        }
                                        </Input>: ''}
                                    <div className="border-product">
                                        <h6 className="product-title">product details</h6>
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
                                        <button className="btn btn-solid" onClick={() => addCart(product, quantity)} >add to cart</button>
                                        {/* <button className="btn btn-solid" onClick={clickProductDetail} >View detail</button> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
        </div>
    )
}


export default ProductItem;