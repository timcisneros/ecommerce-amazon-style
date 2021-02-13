import Head from 'next/head';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';

export default function Home() {
    return (
        <div>
            <Head>
                <title>$pendify</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <NavbarSecondary />
                <div className="grid">
                    <div className="row">
                        <div className="col-1-of-3">
                            <Card
                                title="Keep up with Alexa: February edition"
                                img="alexa_promo.jpg"
                            />
                            <Card
                                title="Looks to love"
                                img="women's_wear.jpg"
                            />
                            <Card
                                title="Easy upgrades, big impact"
                                img="wall_art.jpg"
                            />
                        </div>
                        <div className="col-1-of-3">
                            <Card
                                title="No green thumb required"
                                img="plants.jpg"
                            />
                            <Card
                                title="The Washington Post Digital Access"
                                img="digital_access.jpg"
                            />
                            <Card
                                title="Refresh your every space"
                                img="decor.jpg"
                            />
                        </div>
                        <div className="col-1-of-3">
                            <Card
                                title="​​​​Shop Valentine’s Day gifts"
                                img="valentines.jpg"
                            />
                            <Card
                                title="Shop candy best sellers"
                                img="chocolate.jpg"
                            />
                            <Card
                                title="Shop Valentine's Day deals"
                                img="flowers.jpg"
                            />
                        </div>
                        <div className="col-1-of-3">
                            <Card
                                title="Household best sellers"
                                img="cleaning.jpg"
                            />
                            <Card
                                title="Find a good blanket"
                                img="blanket.jpg"
                            />
                            <Card title="Upgrade your mattress" img="bed.jpg" />
                        </div>
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
