import styles from './DropdownButton.module.css';
import React from 'react';
import Button from 'components/Button/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

export default function DropdownButton() {
    const handleProfile = () => {};

    const items: MenuProps['items'] = [
        {
            label: <a href="">My Profile</a>,
            key: '0',
        },
        {
            label: <a href="http://localhost:3000/usersettings">Settings</a>,
            key: '1',
        },
    ];

    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <Button onClick={(e) => e.preventDefault()} icon={faUser} />
                </Space>
            </a>
        </Dropdown>
    );
}
