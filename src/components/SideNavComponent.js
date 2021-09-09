import React, {Component} from 'react';
import {SideNav,Button,SideNavItem,Icon} from 'react-materialize';

class SideNavComponent extends Component {
  render(){
    return(
      <>
        <SideNav
          options={{closeOnClick: true}}
          trigger={<Button>Klik Saya</Button>}>
          <SideNavItem userView
            user={{
              background: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
              email: 'acrhdukeduck@gmail.com',
              image: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
              name: 'Satura'
            }}
          />
        <SideNavItem href='#!icon' icon={<Icon>person</Icon>}>
          Profil Saya
        </SideNavItem>
        <SideNavItem href='#!icon' icon={<Icon>help_outline</Icon>}>
          Hubungi Kami
        </SideNavItem>
        <SideNavItem divider/>
        <SideNavItem subheader>
          Product
        </SideNavItem>
        <SideNavItem href='#!kesehatan'>
          Kesehatan
        </SideNavItem>
        <SideNavItem href='#!kompute'>
          Komputer & Aksesoris
        </SideNavItem>
        <SideNavItem href='#!gaming'>
          Gaming
        </SideNavItem>
        <SideNavItem href='#!kamera'>
          Kamera
        </SideNavItem>
        <SideNavItem href='#!olahraga'>
          Olahraga
        </SideNavItem>
        <SideNavItem href='#!fashionpria'>
          Fashion Pria
        </SideNavItem>
        <SideNavItem href='#!fashionwanita'>
          Fashion Wanita
        </SideNavItem>
        </SideNav>
      </>
    );
  }
}
export default SideNavComponent;
