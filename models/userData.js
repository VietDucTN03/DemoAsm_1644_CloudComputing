var pg_conn = require("./pg_config")
const shopData = require("./shopData")

async function userData(user, shopId) {
    let [shopInfo] = await shopData(shopId)
    let userData = `
        <header id="header" style="background-color: #272727">
            <div class="d-flex flex-column">

                <div class="profile">
                    <h1 class="text-light" style="margin-top: 50px"><a href="index.html">Username: ${user}</a></h1>
                    
                </div>

                <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><a href="#" class="nav-link scrollto active"> <span>Shop: ${shopInfo.name}</span></a>
                        </li>
                        <li><a href="#" class="nav-link scrollto"> <span>Address: ${shopInfo.address}</span></a></li>
                        <li><a href="#" class="nav-link scrollto"> <span>Contact: ${shopInfo.contact}</span></a>
                        </li>
                    </ul>
                </nav><!-- .nav-menu -->
            </div>
        </header>
    `
    return userData;
}
module.exports = userData;