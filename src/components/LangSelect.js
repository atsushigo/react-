import React, {Component} from 'react';
import i18n from '../react-i18next-config';
import {Menu, Dropdown} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import CountryFlag from "react-country-flag"


const languages = [
    { key: 'cn', title: '简体中文', icon: 'CN'},
    { key: 'en', title: 'English', icon: 'GB'}    
];

class LangSelector extends Component {
    handleLanguageChange = ({key}) => {
        i18n.changeLanguage(key);
    }

    render() {
        return (
            <div>
                <Dropdown arrow
                    overlay={
                    <Menu onClick={this.handleLanguageChange} style={{zIndex:9999}}>
                        {
                            languages.map(item =>
                                <Menu.Item key={item.key}>
                                    <CountryFlag style={{fontSize: '1.5em'}} countryCode={item.icon} svg/> {item.title}
                                </Menu.Item>)
                        }
                    </Menu>
                }>
                    <a href="/" onClick={e => e.preventDefault()}>
                        <GlobalOutlined style={{fontSize:'20px'}} />
                    </a>
                </Dropdown>
            </div>
        );
    }
}

export default LangSelector;
