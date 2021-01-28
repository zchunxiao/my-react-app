import Set from '@/views/set/Set'
import Help from '@/views/help/Help'
import Index from '@/views/index/Index'
import Wallet from '@/views/wallet/Wallet'

const routes = [
    {
        path: "/index",
        component: Index
      },
      {
        path: "/help/:id",
        component: Help
      },
      {
          path: "/set",
          component: Set
      },
      {
          path: "/wallet/:id",
          component: Wallet
      }
  ];


  export default routes ;