import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Image from 'next/image'


const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <div>      

      <div className='absolute w-screen max-w-full  px-6 py-4 shadow-xl left-1/2 h-1/2 text-white-50 transform -translate-x-1/2'
          style={{
            backgroundColor: 'rgb(30, 30, 30, 1)',
            maxWidth: '1440px',
            maxHeight: '416px'
          }}
      >
        {/* <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.03654 2.08337L2.16 2.0715C2.21065 2.06675 2.30881 2.06174 2.45445 2.05646C2.59956 2.05118 2.78688 2.04511 3.01642 2.03825C3.24596 2.03139 3.44834 2.02559 3.62353 2.02084C3.79872 2.01662 3.98129 2.01293 4.17125 2.00976C4.36069 2.00712 4.50871 2.0058 4.6153 2.0058C4.72189 2.0058 4.84036 2.00606 4.97069 2.00659C5.10103 2.00765 5.26039 2.00765 5.44877 2.00659C5.63715 2.00554 5.8044 2.00448 5.95057 2.00343C6.09727 2.0029 6.24977 2.00237 6.40807 2.00185C6.5669 2.00132 6.69644 2.00132 6.7967 2.00185C6.89696 2.00185 7.10329 2.00185 7.41568 2.00185C7.72859 2.00132 7.94573 2.00079 8.0671 2.00026C8.18846 1.99974 8.3734 2 8.62194 2.00106C8.86995 2.00158 9.08579 2.00211 9.26942 2.00264C9.45252 2.00369 9.61002 2.00528 9.74194 2.00739C9.87386 2.01003 10.0918 2.01504 10.3958 2.02243C10.6997 2.03034 10.9274 2.03773 11.0788 2.04459C11.2303 2.05145 11.4252 2.062 11.6638 2.07625C11.9023 2.09103 12.1054 2.10421 12.2732 2.11582C12.441 2.12796 12.6774 2.15302 12.9824 2.19102C13.2869 2.22901 13.5238 2.26331 13.6932 2.29392C13.8621 2.324 14.0481 2.36146 14.2512 2.40631C14.4544 2.45169 14.6755 2.5137 14.9145 2.59232C15.1535 2.67042 15.3372 2.73453 15.4654 2.78465C15.5936 2.83426 15.7131 2.8857 15.824 2.939C15.9348 2.9923 16.1195 3.09862 16.378 3.25798C16.6371 3.41734 16.8171 3.53607 16.9178 3.61417C17.0192 3.69226 17.1754 3.83632 17.3864 4.04633C17.5975 4.25635 17.7431 4.41254 17.8233 4.51491C17.9035 4.61728 18.0009 4.75949 18.1154 4.94154C18.2294 5.12306 18.3492 5.35841 18.4748 5.64757C18.5998 5.93674 18.6763 6.12538 18.7043 6.21351C18.7328 6.30163 18.7739 6.46785 18.8278 6.71217C18.8816 6.95595 18.9193 7.1657 18.941 7.34142C18.9631 7.51661 18.9797 7.6852 18.9908 7.8472C19.0019 8.0092 19.003 8.23953 18.994 8.53819C18.985 8.83686 18.9753 9.03843 18.9647 9.14291C18.9541 9.24739 18.9383 9.36269 18.9172 9.4888C18.8956 9.61492 18.8665 9.76742 18.8301 9.9463C18.7943 10.1257 18.76 10.2827 18.7273 10.4173C18.6951 10.5518 18.6576 10.6882 18.6148 10.8265C18.5726 10.9647 18.5457 11.0507 18.5341 11.0845C18.523 11.1177 18.4951 11.1932 18.4502 11.3109C18.4054 11.428 18.3267 11.6058 18.2143 11.8444C18.1014 12.0823 17.9874 12.2997 17.8724 12.4966C17.7574 12.6934 17.6835 12.8177 17.6508 12.8694C17.6181 12.9211 17.5606 13.0037 17.4782 13.1171C17.3959 13.2306 17.3218 13.33 17.2558 13.4155C17.1904 13.5015 17.1197 13.5928 17.0437 13.6894C16.9677 13.7859 16.8925 13.8786 16.8181 13.9672C16.7432 14.0553 16.6498 14.1595 16.5379 14.2799C16.4266 14.4002 16.3353 14.4925 16.264 14.5569C16.1923 14.6207 16.1147 14.6867 16.0313 14.7548C15.9474 14.8228 15.8472 14.9001 15.7306 14.9867C15.6145 15.0737 15.4934 15.1582 15.3672 15.24C15.2406 15.3218 15.1309 15.3901 15.038 15.445C14.9451 15.4998 14.7987 15.5766 14.5987 15.6753C14.3992 15.774 14.2259 15.8544 14.0787 15.9167C13.9309 15.9785 13.7842 16.037 13.6386 16.0924C13.4924 16.1478 13.2872 16.2138 13.0228 16.2903C12.7584 16.3673 12.5241 16.4301 12.3199 16.4787C12.1152 16.5272 11.9062 16.5739 11.693 16.6188C11.4798 16.6636 11.3466 16.6898 11.2933 16.6971C11.2664 16.7014 11.2052 16.7111 11.1097 16.7264C11.0142 16.7412 10.8828 16.7615 10.7155 16.7874C10.5482 16.8127 10.3971 16.8343 10.262 16.8523C10.1269 16.8702 9.98282 16.8882 9.8298 16.9061C9.67677 16.9235 9.56149 16.9359 9.48392 16.9433C9.40635 16.9502 9.30792 16.9586 9.18867 16.9686C9.06941 16.9787 8.91481 16.99 8.72484 17.0027C8.53488 17.0153 8.36576 17.0251 8.21749 17.032C8.06921 17.0388 7.9365 17.0438 7.81936 17.047C7.70222 17.0502 7.57635 17.0528 7.44179 17.0549C7.30776 17.0575 7.14578 17.0597 6.95581 17.0612C6.76638 17.0623 6.58932 17.062 6.42469 17.0605C6.26005 17.0583 6.07379 17.0546 5.86588 17.0494C5.65798 17.0441 5.40759 17.0391 5.11473 17.0343C4.82187 17.0291 4.56675 17.0201 4.34935 17.0074C4.13195 16.9953 3.90608 16.9771 3.6718 16.9528C3.43803 16.9291 3.25255 16.8966 3.11536 16.8554C2.97816 16.8143 2.82804 16.7457 2.66498 16.6497C2.50193 16.5531 2.40326 16.4882 2.36896 16.4549C2.33466 16.4217 2.29747 16.3555 2.25737 16.2563C2.21726 16.1576 2.18587 16.0587 2.16318 15.9595C2.14102 15.8603 2.12044 15.7442 2.10144 15.6112C2.08245 15.4777 2.06713 15.3413 2.05552 15.202C2.04339 15.0632 2.03496 14.9215 2.03021 14.7769C2.02546 14.6329 2.02149 14.4973 2.01833 14.3701C2.01569 14.2434 2.01436 14.1268 2.01436 14.0202C2.01384 13.9131 2.01332 13.7812 2.01279 13.6245C2.01227 13.4678 2.01173 13.2852 2.0112 13.0767C2.01067 12.8678 2.01016 12.6789 2.00963 12.51C2.0091 12.3412 2.00935 12.1615 2.0104 11.971C2.01093 11.7805 2.00936 11.5694 2.00567 11.3378C2.00197 11.1061 2.00011 10.97 2.00011 10.9294C1.99959 10.8882 2.00091 10.8025 2.00407 10.6721C2.00777 10.5418 2.01041 10.4175 2.012 10.2993C2.01305 10.1811 2.01411 10.0479 2.01516 9.8996C2.01622 9.75185 2.01727 9.61835 2.01833 9.49909C2.01991 9.37984 2.02123 9.2743 2.02229 9.18249C2.02493 8.99938 2.036 8.84003 2.05552 8.70441C2.07452 8.56933 2.10118 8.4477 2.13548 8.33952C2.16978 8.23135 2.19536 8.15853 2.21224 8.12106C2.2286 8.0836 2.27795 7.99574 2.36027 7.85749C2.44206 7.78836 2.52331 7.73084 2.60404 7.68494C2.68425 7.63956 2.80774 7.5918 2.97448 7.54167C3.14123 7.49154 3.27604 7.45856 3.37894 7.44273C3.48184 7.42637 3.60822 7.41398 3.75808 7.40553C3.90741 7.39709 4.00794 7.39207 4.05966 7.39049C4.1119 7.38891 4.24012 7.386 4.44433 7.38178C4.64907 7.37756 4.86277 7.37651 5.08545 7.37862C5.30761 7.3802 5.47434 7.38099 5.58568 7.38099C5.69702 7.38099 5.86168 7.37915 6.07961 7.37545C6.29807 7.37176 6.46059 7.37097 6.56718 7.37308C6.67324 7.37519 6.81518 7.37677 6.99301 7.37783C7.17084 7.37888 7.30646 7.37967 7.39986 7.3802C7.49378 7.38073 7.63651 7.38284 7.82806 7.38654C8.0196 7.39023 8.27817 7.39735 8.60375 7.40791C8.9288 7.41846 9.20874 7.43112 9.44355 7.4459C9.67837 7.46014 9.91028 7.47994 10.1393 7.50526C10.3683 7.53007 10.5915 7.55724 10.8089 7.58679C11.0263 7.61687 11.197 7.64114 11.321 7.65961C11.445 7.67808 11.5788 7.70341 11.7223 7.7356C11.8664 7.76726 12.0099 7.80234 12.1529 7.84086C12.2959 7.87886 12.4173 7.91105 12.517 7.93743C12.6162 7.96434 12.7331 7.99917 12.8676 8.04191C13.0027 8.08465 13.1792 8.15008 13.3972 8.2382C13.6156 8.3258 13.7858 8.39651 13.9077 8.45034C14.0291 8.50416 14.1613 8.56801 14.3043 8.64188C14.4473 8.71576 14.5794 8.78779 14.7008 8.85797C14.8222 8.92868 14.9148 8.98382 14.9786 9.02339C15.043 9.0635 15.1683 9.14924 15.3546 9.28063C15.5403 9.41255 15.7124 9.54421 15.8707 9.6756C16.0284 9.80699 16.1759 9.94023 16.3131 10.0753C16.4503 10.2104 16.5901 10.3571 16.7326 10.5154C16.8751 10.6742 17.0255 10.8608 17.1838 11.075C17.3421 11.2892 17.4571 11.4502 17.5289 11.5578C17.6012 11.6655 17.6566 11.7531 17.6951 11.8206C17.7342 11.8882 17.7798 11.9734 17.832 12.0763C17.8848 12.1797 17.951 12.3111 18.0307 12.4704C18.1109 12.6303 18.1819 12.7791 18.2436 12.9169C18.3054 13.0546 18.3695 13.2124 18.436 13.3902C18.5025 13.5675 18.565 13.7606 18.6236 13.9696C18.6821 14.178 18.7312 14.3764 18.7708 14.5648C18.8104 14.7537 18.8417 14.9381 18.865 15.1181C18.8882 15.2975 18.9059 15.4758 18.918 15.6531C18.9307 15.8299 18.9357 16.0346 18.933 16.2674C18.9304 16.5006 18.9235 16.6811 18.9125 16.8088C18.9008 16.9364 18.8674 17.148 18.8119 17.4435C18.7565 17.7396 18.7236 17.9084 18.713 17.9501C18.7019 17.9918 18.6774 18.0723 18.6394 18.1915C18.6009 18.3108 18.5697 18.4002 18.546 18.4599C18.5223 18.519 18.47 18.6377 18.3893 18.816C18.3085 18.9944 18.2154 19.1741 18.1099 19.3551C18.0043 19.5366 17.9231 19.6698 17.8661 19.7548C17.8086 19.8397 17.7421 19.931 17.6666 20.0286C17.5906 20.1257 17.5146 20.2154 17.4387 20.2978C17.3632 20.3801 17.2637 20.4811 17.1403 20.6009C17.0173 20.7207 16.873 20.8471 16.7073 20.98C16.5421 21.113 16.4126 21.2109 16.3186 21.2737C16.2242 21.336 16.1137 21.4006 15.987 21.4676C15.8599 21.5346 15.7008 21.6143 15.5097 21.7067C15.3187 21.7995 15.1549 21.876 15.0182 21.9362C14.8815 21.9963 14.7718 22.0401 14.6889 22.0676C14.5238 22.123 14.4174 22.1581 14.37 22.1729C14.3219 22.1876 14.1916 22.2225 13.9789 22.2773C13.7663 22.3322 13.5581 22.3821 13.3544 22.4269C13.1513 22.4713 12.9682 22.5085 12.8051 22.5385C12.6415 22.5691 12.4954 22.5942 12.3666 22.6137C12.2373 22.6327 12.0139 22.6628 11.6962 22.704C11.378 22.7451 11.1604 22.7705 11.0432 22.78C10.9255 22.7895 10.8036 22.799 10.6775 22.8085C10.5509 22.8179 10.3314 22.8303 10.019 22.8456C9.70659 22.861 9.4219 22.8723 9.16492 22.8797C8.90742 22.8865 8.74754 22.8902 8.68528 22.8908C8.62248 22.8918 8.49926 22.8923 8.31563 22.8923C8.132 22.8918 7.99746 22.8918 7.91197 22.8923C7.82702 22.8923 7.73518 22.8929 7.63651 22.8939C7.53783 22.8945 7.39667 22.8942 7.21304 22.8931C7.02941 22.8916 6.89144 22.8897 6.79909 22.8876C6.70622 22.885 6.63286 22.8834 6.57904 22.8828C6.52469 22.8823 6.35822 22.8794 6.07961 22.8741C5.80047 22.8683 5.58201 22.8636 5.42423 22.8599C5.26593 22.8562 5.07728 22.8528 4.8583 22.8496C4.63878 22.8459 4.44458 22.8433 4.27572 22.8417C4.10687 22.8396 3.92668 22.838 3.73513 22.8369C3.54358 22.8354 3.38263 22.834 3.25229 22.833C3.12196 22.8319 3.00481 22.8303 2.90086 22.8282C2.79691 22.8267 2.63071 22.8219 2.40222 22.814" stroke="white" strokeWidth="2.28986" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> */}
        <Image 
          src="/icons/bd.svg"
          alt="Bad Decision Co Icon"
          width={31}
          height={37}
        />
      </div>
        <Box r3f route='/box' />
    </div>

    
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Not Box',
    },
  }
}
