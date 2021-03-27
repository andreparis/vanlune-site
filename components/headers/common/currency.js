import React, { useContext, useEffect, useState } from 'react';
import { Media } from 'reactstrap';
import language from '../../constant/langConfig.json';
import i18next from '../../constant/i18n';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import axios from 'axios';


const Currency = ({icon}) => {
    const [data, setData] = useState([]);
    const Context = useContext(CurrencyContext);
    const selectedCurrency = Context.currencyContext.selectedCurrency;

    const changeLanguage = lng => {
        i18next.changeLanguage(lng);
    };

    useEffect(() => {
        let localData = localStorage.getItem('currency');
        if (localData == [] ||
            localData == null) {
            getCurrencies()
            .then((result) => {
                localStorage.setItem('currency',  JSON.stringify(result));
                setData(result);
            });
        }
        else {
            setData(JSON.parse(localData));
        }
    }, []);

    const getCurrencies = async () => {
        return await axios
        .get('https://economia.awesomeapi.com.br/all/BRL-USD')
        .then(function (result) {
            if (result.status != 200)
                throw "";
            var currencies = [];
            let currency = result.data['BRL'];
            currencies.push({
                symbol: '$',
                currency: currency.codein,
                value: currency.high
            });
            currencies.push({
                symbol: 'R$',
                currency: 'BRL',
                value: 1
            });
            return currencies;
        })
        .catch(function(error) {
            console.log(error);

            return  [];
        });
    }
    

    return (
        <li className="onhover-div mobile-setting">
            <div><Media src={icon} className="img-fluid" alt="" />
                <i className="fa fa-cog"></i>
            </div>
            <div className="show-div setting">
                <h6>language</h6>
                <ul>
                    {language.map((item, i) =>
                        <li key={i} ><a href={null} onClick={() => { changeLanguage(item.val) }}>{item.lang}</a></li>
                    )}
                </ul>
                <h6>currency</h6>
                <ul className="list-inline">
                    {data && data.map((cur, i) =>
                        <li key={i}><div onClick={() => selectedCurrency(cur)}>{cur.symbol}  {cur.currency}</div></li>
                    )}
                </ul>
            </div>
        </li>
    )
}

export default Currency;