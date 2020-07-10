import React from 'react';
import CardWork from './cardWork.js';
import DetailWork from './detailWork.js';

const PageWorks = () => {
    return (
        <article>
            <div className='pageWorks' id='works' align='center'>
                <div className='container slide-right'>
                    <div className='super-header mb-5 black'>WORKS</div>
                    <div className='row mb-3'>
                        <div className='con-3 min-header'>
                            <div className='mb-1'>Website</div>
                        </div>
                        <div className='row con-7 sub-header white bolder mlm-1'>
                            <CardWork id='btnCovid' modal="modalCovid" text='COVID-19 TODAY' background='web-7'/>
                            <CardWork id='btnPortfolio' modal="modalPortfolio" text='PORTFOLIO' background='web-6' />
                            <CardWork id='btnAurora' modal="modalAurora" text='AURORA' background='web-5' />
                            <CardWork id='btnPamAir' modal="modalPamAir" text='PAM AIR' background='web-4' />
                            <CardWork id='btnBlog' modal="modalBlog" text='PERSONAL BLOG' background='web-3' />
                            <CardWork id='btnSiBunda' modal="modalSiBunda" text='SIBUNDA' background='web-2' />
                            <CardWork id='btnLibon' modal="modalLibon" text='ONLINE LIBRARY' background='web-1' />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='con-3 min-header'>
                            <div className='mb-1'>Android</div>
                        </div>
                        <div className='row con-7 sub-header white bolder mlm-1'>
                            <CardWork id='btnGithubApp' modal="modalGithubApp" text='GITHUB API APP' background='andro-1' />
                            <CardWork id='btnBookon' modal="modalBookon" text='BOOKON' background='andro-2' />
                            <CardWork id='btnMMA' modal="modalMMA" text='MMA' background='andro-3' />
                        </div>
                    </div>
                </div>
            </div>

            <DetailWork
                id='modalCovid'
                link='https://lovanto.github.io/covid-today/'
                firstNameModal='COVID-19'
                lastNameModal='TODAY'
                background='web-7'
                description={'Website for inform how many people already confirmed, recovered, and deaths cause covid-19 outbreak. I got the covid-19 API from https://github.com/mathdroid/covid-19-api, then I use chart.js for showing data by chart bar and also I using Bootstrap for handle responsive of mobile phone.'}
                badge='active'
                line='800'
                language='Javascript'
                size='5.2 Mb'
                img1={require('../img/detail/covid_1.png')}
            />
            <DetailWork
                id='modalPortfolio'
                link='https://lovanto.github.io/'
                firstNameModal='PORTFOLIO'
                lastNameModal='WEBSITE'
                background='web-6'
                description={'This is my website portfolio. It shows a little about me and my contacts. Also presented a little program that I made then show how much line is written in program, what language I use, and the size of program too.'}
                badge='active'
                line='2000'
                language='HTML, CSS'
                size='25.3 Mb'
                img1={require('../img/detail/portfolio_1.png')}
                img2={require('../img/detail/portfolio_2.png')}
                img3={require('../img/detail/portfolio_3.png')}
                img4={require('../img/detail/portfolio_4.png')}
            />
            <DetailWork
                id='modalMMA'
                link='https://lovanto.github.io/covid-today/'
                firstNameModal='MONEY'
                lastNameModal='MANAGEMENT APP'
                background='andro-3'
                description={'MMA is an app for record your income and expense then this app will count it and showing how much many you have. After all if you want to convert it to excel, sure you can do it here..'}
                badge='active'
                line='5.900'
                language='Java'
                size='150.0 Mb'
                img1={require('../img/detail/mma_1.jpeg')}
                img2={require('../img/detail/mma_2.jpeg')}
            />
            <DetailWork
                id='modalBookon'
                link=''
                firstNameModal='BOOKING ONLINE'
                lastNameModal='DESIGN'
                background='andro-2'
                description={'BOOKON or Booking Online just a simple design for my submission task about designing an android app using layout, recycler view and get & set it to view using parcelable.'}
                badge='inactive'
                line='800'
                language='KOTLIN'
                size='100.8 Mb'
                img1={require('../img/detail/bookon_1.jpeg')}
            />
            <DetailWork
                id='modalGithubApp'
                link=''
                firstNameModal='GITHUB'
                lastNameModal='API APP'
                background='andro-1'
                description={'Purpose of this project is for my learning how to get the data from API GITHUB and set it to your android apps. As you can see this app can do such search user data, favourite user, and showing notification every 09.00 AM if the setting is on. After all, public can use it.'}
                badge='active'
                line='5.200'
                language='KOTLIN'
                size='90.2 Mb'
                img1={require('../img/detail/github_1.png')}
                img2={require('../img/detail/github_2.png')}
            />
            <DetailWork
                id='modalBlog'
                link=''
                firstNameModal='Lovanto'
                lastNameModal='Blog'
                background='web-3'
                description={'My personal blog is like a normal blog for posting diary, activity, journal and something like that. This blog written in PHP for back-end code and HTML&CSS for front-end code also using CKEDITOR for default WYSIWYG posting editor, then I using cloudinary for handling image and mysql database for handling the data. Now this blog just running on my local.'}
                badge='inactive'
                line='28.400'
                language='PHP 7'
                size='15.9 Mb'
                img1={require('../img/detail/blog_1.png')}
                img2={require('../img/detail/blog_2.png')}
                img3={require('../img/detail/blog_3.png')}
                img4={require('../img/detail/blog_4.png')}
            />
            <DetailWork
                id='modalSiBunda'
                link='https://lovanto.github.io/sibunda/'
                firstNameModal='SIBUNDA'
                lastNameModal='Web Design'
                background='web-2'
                description={'SIBUNDA is a website that aims to inform Sundanese cultural traditions, clothing, and more. This website was created using the Bootstrap framework so that it can be more responsive on a smartphone or iPad. SIBUNDA was made for the UTC 1.0 competition at Unibi on January 19, 2019 and wow we got 1st place.'}
                badge='active'
                line='16.500'
                language='HTML, CSS'
                size='650.4 Mb'
                img1={require('../img/detail/sibunda_1.png')}
                img2={require('../img/detail/sibunda_2.png')}
                img3={require('../img/detail/sibunda_3.png')}
                img4={require('../img/detail/sibunda_4.png')}
            />
            <DetailWork
                id='modalLibon'
                link='https://lovanto.github.io/libon/'
                firstNameModal='LIBRARY'
                lastNameModal='ONLINE'
                background='web-1'
                description={'Libon is a website design with an online library theme created with pure HTML and CSS on October 27, 2018, at Politeknik Harapan Bangsa, Tegal, Indonesia, which was made for 3 hours in Invofest 3.0 competition by Rifky Lovanto and Faisal Yahya as developers. and Devita Kania as a Designer. BTW, we got 3rd place.'}
                badge='active'
                line='3.600'
                language='HTML, CSS'
                size='12.6 Mb'
                img1={require('../img/detail/libon_1.png')}
                img2={require('../img/detail/libon_2.png')}
                img3={require('../img/detail/libon_3.png')}
            />
            <DetailWork
                id='modalPamAir'
                link=''
                firstNameModal='PAM AIR'
                lastNameModal='PROJECT'
                background='web-4'
                description={'This project was created to handle and simplify the work carried out by employees at PT. Tirta Kencana Alam previously manually such as recording, calculation of costs, making water meter reports. Then we also added excel export to MySql to make it easier to migrate previous data. Made by Rifky Lovanto and Dani Hamdani.'}
                badge='active'
                line='15.000'
                language='Codeigniter'
                size='95.6 Mb'
                img1={require('../img/detail/pam_air_1.jpg')}
                img2={require('../img/detail/pam_air_2.png')}
                img3={require('../img/detail/pam_air_3.png')}
            />
            <DetailWork
                id='modalAurora'
                link=''
                firstNameModal='AURORA'
                lastNameModal='COMPONENT'
                background='web-5'
                description={'Aurora is Proclub Design System written in React to build consistent user experiences with ease, light, fast and, yet with enough flexibility to support the broad spectrum of Proclub websites. Aurora is built upon systems that form the foundation of our styles such as spacing, typography, and more. Aurora still under Development by Proclub Members.'}
                badge='active'
                line='2000'
                language='REACTJS'
                size='4.35 Mb'
                img1={require('../img/detail/aurora_1.png')}
                img2={require('../img/detail/aurora_2.png')}
                img3={require('../img/detail/aurora_3.png')}
            />
        </article>
    );
}

export default PageWorks;
