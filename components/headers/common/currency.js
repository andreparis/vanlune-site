import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Media } from 'reactstrap';
import language from '../../constant/langConfig.json';
import i18next from '../../constant/i18n';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import { withApollo } from '../../../helpers/apollo/apollo';
import axios from 'axios';



const Currency = ({icon}) => {
    const [data, setData] = useState([]);
    const Context = useContext(CurrencyContext);
    const selectedCurrency = Context.currencyContext.selectedCurrency;

    const changeLanguage = lng => {
        i18next.changeLanguage(lng);
    };

    useEffect(() => {
        async function getCurrencies() {
            await axios
            .get('https://economia.awesomeapi.com.br/all/BRL-USD')
            .then(function (result) {
                if (result.status != 200)
                    throw "";
                console.log(result);
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
                setData(currencies);

                return currencies;
            })
            .catch(function(error) {
                console.log(error);
            });
        };
        getCurrencies();
    }, []);

    

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

export default withApollo(Currency);