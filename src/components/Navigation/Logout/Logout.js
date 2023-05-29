import React from 'react'
import { Button, Modal } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

    const navigate = useNavigate();


  const handleLogout = () => {
    Modal.confirm({
        title: 'Cerrar sesión',
        content: '¿Estás seguro de cerrar sesión?',
        onOk: () => {
            console.log('Cerrando sesión...')
            window.location.reload();
        }
    })
}
return (
    <Button type='link' onClick={handleLogout} aria-label='Cerrar sesión'>
        <LogoutOutlined />
    </Button>
    )
}
