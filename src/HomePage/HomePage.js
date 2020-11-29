import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import "./home.css";
import { SocialIcon } from 'react-social-icons';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  contentCenter: {
    marginLeft: 200
  }
}));

export const HomePage = () => {
  const open = useSelector(state => state.drawer);

  const classes = useStyles();
  return (
    <div>
      <div className="home__container">




      {
        <img
          className="home__image"
          srC="https://image.freepik.com/free-vector/badminton-player-with-racket-feather_23-2148186026.jpg"
          alt="">
          </img>
              }

      </div>
      <div>
        <h2></h2>
      </div>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.contentCenter}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {[].map(value => (
                  <Grid key={value} item>
                    <Paper>
                      <img
                        alt=""
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUTExIWFRUXGBobGBcXGCAZGRsfFxoXFxUYGBoYHyggHR0lGxgXITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTctLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABCEAACAQMBBQYCBwYFBAIDAAABAgMABBEhBRITMVEGIkFhcYEUkQcyQlKhwfAjM2JysdEVNEOC4SRTkqIlcwiD8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACcRAQACAQMDAwQDAAAAAAAAAAABAhEDITEEEkETIlEyYXGBFFKR/9oADAMBAAIRAxEAPwDnWzfo/wBqTcoCo6ucf81s9j9DF42sk6J5DJrp9x2lVYeIg5jIB09M9Kx57UTSREoV38eBziu3ZDl6ktbtPoYhU/tbhz6YArLQfRLs1frF29WNe/4vNJFuPLuv4sRu+uKsQbU+HURSNJIT9pQTz8xUzWEibSyMP0cbHzgR7xHU5q8OwGxgd3gJnp41i7faDxMXC5TmzFske1QztSOaT4iAPJIoIAOVGPfnWO6rW7YJfo72PjJgUDryqw/0XbJfUIw9GP5GsZe9okaLh3mLcvoBvZJz5j/mpVp2gaIJGsUkicuIOWOpqd0G63N9D2zmyFlkU/zZ/rWMuPoQQ/u7th6gGszYbViSaSVbjiFsZjByVPkPCps+2nkaN45OEA3eVxjeHQZpmq7tBvPoTv1/dzo/TORWn7f7F7Qs2AliJz4oSw99K+g7zb8m7+xKs/Rjgeeo8q0n6R9vXUTpKjqF3QCpG8M6ePgKxedva7aMVtbF5xDickbjQhh65q2SfOur3G07sIHmsYpUIzvKPD5ZrDm82LNpJbvC3iUPL2rnGrPmHs/iUt9F4c+3j1NN89TW+P2PsZhm3vQD92QfnpWH2j2Lu4hvbodeqHNajVrPlyv0erXxn8Nb3z1NN89TVyWBlOGBHqKtkV0eaazHJvnqab56mqaURVvnqab56mqaUFW+eppvnqappQVb56mm+epqmlBVvnqab56mqaUFW+eppvnqappQVb56mm+epqmlBVvnqab56mqaUFW+eppVNKDscdm4zJHJLcg/ZJAX5aCrsLW692N0tZW+sq4JP9zVuAxTSFobp2dBkwoQAffniqo5i+8ZrdbVvCRiCegJFZmZZwqkw7hJ7d2A/wBVjhfU66/Kq+LMgZjOssQ0CRrkge2ufarBeSGM8Rnvkk5CNRuAeoOnvVUdq+6Pg+FaseaSDLefI6n51nK4ebPt1Iaa1BSRufxBbH+0N4dMCvNpXCd2K6lZJCeduCM/L9elVTiC4dUmjleRNDIAUjyPfr61f+Jmgy0xi4A0Xhgu/lr4H2NTIuPHOhAMUbwqP3rtmT19fU1YsYw7vJDcSTbunBGFT0J/uaptI95TLaIxdvC5Zl/A6Uu5oWKQzu8c32ltgQuv3iBp60ypNLFGpEnCspGPNMM3vpV24hkxGrW/xaDvceQqAPPGmvt71cKyow34I/h1GTNI+8488YzmolnLHIWltp5blhn9mW3V9AMcqsCRbzhpGC3SyALrbIAW9A1epLuRaILU50FwQ4P4n+tR5JgIW+I3NnOx0ZCC59RjSqZ42WNUW3faCt9uRl3cdc+ApAlXNtG0qMeOzFdGhzwPw0+dWNobP3xJ8TFCYQPrRZabTyUZ+VXeOvFVEvlhwv8AlUCn23qWZAllYWrWrY/zEhBQ+ZGcH9cqqxMw1eXstDPFmy3gc8595D6DIxWKvrC/tdxSzFm5KmW09RpW9XzI8AM7NeDPO27vTo1eGW4/Zi0eJIcD9nMp4vnneOf6VJiJ5h0p1GpT6ZlradoLd8RXkG64Gpxr7+IqzP2TtJ9baYZP2SazidnbG7ueHwZhMRvOwDCL1Ynw9Kxm1/o+u7XiS7xIBO6sClz5Z5ED28anpTG9ZeqOtraMatYlqG1eztxAe8hx1GorEstb92Tvdo3L8FYjKBoxcYVf5mPL+tbTtj6LoZYi0Um7NnUfYPl1Hr+ArVe/zDnrU0OdO36cWxXlbHtnsdeWys7xHcU4LDXHT2qR2e+j/aN4N6OEqn/ck7i+2Rk+wrcbvNas15apSsp2g2LNaTvBKpDKeeNGHgy55g1jStGVNKUoFKUoFKUoFKUoFKUoFKUoOxsiOihXjsZWJyi7pZuecY8atyAFlguLeW5AOskihQP4t7QH21quNI7jek+FFtKeUkwBDdM65FU3d9JbrwbwvdmTkkSEKB5PXMSDG8eWguV4KH91CgY+YYD8qsWaW9xvTpAYJV+rJcAhSeqgnI+Q51VHsyVQrbPWKAEZYSKRKBzOn2qjT31ldyJFOkk0qDBdVZYs/wASA6VBevrx4l4d67z7/LgIwOvgrrzqTDs+WFV+C4ccZG83Fy0nuuc5qhZL21bL/DxWa+OrZHRfFTUOwgs5neez4kk+chZZGQf7T4iguCayu5xGWmMy/ZXfWIsOo+zqPKp0l7dxbxvOBDDyBVjv+zDmai3e0CsTJtFktWb6phP7XHnga+tURpJBGvwcJvIm5tJJvLrzyp5UFzZUQ3HnsWku2Y4KyuQg9QdDXt/dIUEdxcpZScisLA/lkVTfrBM8aG8+HkABNtEyhQw8AwFXYruQzLHLs8lVH+YlK5XowP1T86C85mVkT4P4iNRpcyspOD4gnyq0gLTF49oGTcGfhotzJ8tNCP1mrMIKtJKL6S7UEjgxBSMdME+vKmz9ySKSSGBdnOT++lUYPhgAnIPtVF2yk3+IxslsSckTMEyfNg2ufao7GWOFi8rbTWQ4CRqGjGuASRqKzvZ3ZZlnihuXN2V/acUoNwbpz9bOuuNK3naPZ+Fozwv+nbOS0QC5I01GMHwqwS1XsHsFd3jtbfDrqOFganTeYlTk9NetZnbPY2ykcTGIGQfVY64zyz18OdZ+2AVAo5KMfIYz7/nRzlCPEflyrpEM5YZIBGNwaY8evnV9ZPGqrwZANQon0PUH/musQxM4ZCGFSugAJ1OPE+dRByPr+RqVYyaD0FRbjQH+b+9WqWSLSzWT66h1BGjDIyDkaGsvc47o6kfgai7KXuZ86kPzHkDTCzaWB7S9jLXaYX4gEbh7rpgPjxXOMYP/ADXOPpb+j22s7SOazh3VRyJTvFmwQoVjk8s/1rt0CgADypcWiTI0UihkcEMp5EEYNc7QsTjZ8YMKprafpJ2WlrtC4hji4Uakbi5JyCAQwJ688Vq1YdClKUClKUClKUClKUClKUHWePs++lWKUvJMObIGWMnHJx4epqV8Re2xIuPh4rUd1V3jnHgVbnn9edezXXFhxcvHs+V2GDGwLP8Azjmp96gPO1l/0629xeK/LiENG3mpXOPwrAqs7C1cvdWJlupUOkbyMN0n11YepNSZNpOY2S/kjtWPJoXAfX7ygVVfbMeXcEF0LRVXeNsgXiLjwG4dai2t/aXMywy2ks8iaGd4wpB6uBzHripgVxQzWiD4SN75ZRkyyPvRH/bnAPr86u7ShW43I2uxZyHnCrqQfQrgg+pqm7hvbdjNLexi3UkBIYy6EdGUaKfc1G2WNn3bSPaWoW4AyrSqeCTzyMZCn1oJS3cqukDbPluFi/1psFvIqx0I9TV02c3EM0e0GZIxkwRKvEH8JVdCPDkahy3VxACu1J4XjfURAFm/2MoAX8ao2ZYxcMz7HiEkmcMZiRImfug90j3qKk7MuIblpGjsTbSHlPJFvL5lgcY9q8up5bWJjtCf4uGTRY40BTPId8aL0xVjaN3G8XC2rOiuORgcmQfzoBun0q9bx3NoiLsyBbiB9TMz7wOOYKtgIaqFla8SHf2ZClu2NRNGQ5/lkbQ86i7aurZQkW1XM8640iBXA/iIwD7CpG1bS2u3QT3pt5TziWbiIegU6BTyqTBtW8SZYhs5nji0EsjAvjwIkbu45ePjRXTuzVlbwwrJbRLGsiKxUZxqMjAJ00rNiUHw0Yf0/X4VZ2dcxzQJImN0ryBzjmCMgkaHNUgd1l8VOR+v1zqwzKhjr5VYjfDsPvDPy0P9/avZJBjPXUf2qLdy4IbBxnX0Oh/rXWGZeudMfrSsdnBYfrQ1NMhydKgzN3uXMEV0oxZLs30FLofW9RUe1k5ZFSJCCX9v6itRyk8Mtswfsx71Ix+vcVHs/qCpER/rU8LKUtSIBUdDUpOVYs3V85//AJCbv+JrjmIE3v8AyfH4Vy810z6XNowS7ZkBzuRxrE5XU5ALHA8iwHtXNpo8EjpXNtbpSlApSlApSlApSlApSlB1aL/Cr6V2giD3PgspZY3PUAHTOuhq9abRvbYkXpgtrbBHBx3mHWMKd70NV7Q2bfzIHspVigb6yGPgOg8d4YyR6Vi12/YqiWtzv7QKt9fc+p4ELnvMPKsJC5aWNi6mfZ0XxEwJJSWRhIuuhC573zqUNoSyQOm02W1VvqMjbsvoUGSw8zVV/s3aGA9m8MFtjO+qcF0A++D3s+lQptubJnkjW6zcTAbpudwqjHwDqDvMB1xRVyOL/D0ElnFLdpJ/qcTeiJOmGRfHXxqbfWou4oo5Jhs+RtDbqVw/M5CjBB8iasbm1rdw0C20Nt9biIAsLL/GT3jp4c6jSWexrqZzGwec4/ZGRooXf7W45GefhUC42sLPFm9rPdgnAW4AIIz/AKW6M/iayO09iT3DI0V01ugUP8MFAljx0SP63jzq3s3am0EYxTWqQWqjdYu5QoD4pKcknHLFY6LYVkN65tHmvXVid1JOG6+Z132HmKC6u3LGWVIJ7aW6kBxxWjCyA8u8ijLDyNTbzZ20IXaZr1Egj5KkeQAfstEvLTrXmytu3F4sizwm2jIx8Uh4bJujGHZ8F/bXWsda7NTZ6/FJPcXIbm1vjhHykJJPzFBdsb3ZN1MVigUXJHcd0PBZupiU6VLkfaMW9/iUtuLdjjhya5xp+yEeCNPOrOydqDaKSpbx/AzHJM0ajhuOkj4G4fQ1Zgik2bHi8uTLE+vBEZmRv/2PhQfMGg6f9FMtqbRhalzCJW3Q/wBk4Usq513cnIz96tmkYI2fY+h+qa539FnaGwfiRWqNBlt8xNk68shuWMADHPQV0C9w2D8/wzVSUJz3yvhzH5/rzrydd5CPUVduNQrDmpx/f8qsyv08RWoRHSTKqT0qLevhgfOvYxjI8z+OtRr/AOr+vT8q7VnEsTG0pkHiKqgfvkHxFUQeB6ivEbMgHkf6V0nlmeGetz3RUmDUCsdFJham2p0X9dKz4J5T4xVO1toJbwSTOcLGjOfRRmvYGBHv/Sub/T5tzh2kdqn17htQOe4hyfmxUfOudpdK78OFXVy88k076tIzMfVjmsfPGVJB51tmxtlYure3kXdJkUuD0HeIPsKwPaW5WW6ndQApkbAGgwDgY9hXKs53evX0/TxWeWMpSlaecpSlApSlApSlApSlB0i6jOzpVmvLuaafmiRE7jDzdtCPICsnsjarX6OLeL4KYkkSLEGif+ZyO6f71jdk9qIF4drFaS3USE9+Rd+RSdMxpghQOhqV2i2FePmWW/IswN4ggq6Z+wYUHPz5VlEMQy7OmE99eyGUjSKM7++OjM3c3TWR2Tex3qv8FAlnOSTvNFvo/pIRhD7eNYq17Z2cSx24ge5hQ6PNhpBnIzEpBAHkan7a2DtG5USRXbG1IJIcGHhgc9+IAZHmAQaYFtLifZ7Mdo3RkLjW1A4gcHkSThVHmNdRVWz3huI//iooYpwDvRSpvSHzjkYkadMVEj7S7PhiS2mD7QRW/eON1UHiIt7vEeROKkbSttoXKBtnzK9qTjdgUQFPKQaHTrkiivWuWSFotsyhwdUjHeuUJ5Fd3RR5HSqGhSBPiNlQRzBQMylmknTrvR93d9s1S97s8okO0pRcyoQOJBksijmsko/eD0yaqvPjYN19mwQcJtFntl4jn+F2bvKeeQcUwL1wWvbYHajC1YD9lNnBfP34PH+bSrM4XZAElvFNMGGk7SDgHPhuR5B9GNXNpWdldPGdoTJb3jaOIm3g3TiHVYm96jXG1bjZh4VvZGNHI70jGdZRnw3Twzny1qLlOnibadqpdvgMHAB7ltLk81XRgdfMedRZbtdkqYJDPchh+7kQLbHPiu9vE/7cVf2p2eXaDRyyzNazSc7aZt5tBzhUnIB+62KhS9pY7EG1NvNOoPeS8wFGD/px47vzphGX2bLNdJHNs4LbrGw37Z13YmOdSJQO+D0JyK6fsa9VwAHyAd1lOpRhjK5OCRroTzrk21Oz8+0RHNDO0UZ5W8wKGPdGf2SKMOvQgZq5s3tuth+zaSa7ZMBjInDK40wN/vnGv1qK7GQQxXr/AP0f2+VRZB+B/wCDVGzNpxXMKTxNvLjPt4g+YqZfEaN4+P5H8qsSzLDy5Ukfrypdx78Yxz5j561kLuOIjvHdxyqKkmF7o0HifP8AKt7zDPlXbR6r7/h4Ukt92ZQORB/HlVPGdgdAMHw/E6V5I7q6d/O9yPTX+9dPPLPhKmJCDqRWQOQmfL+4rHLcHQEKeXh16Vk5JgVAcc8fV6nJHP3+dZi2yzG6dZLoo8v1+fyrlHbVo1upNo3IyVAitITrkIT+0YeGWLnHp1rou3tspa28k5BIUBQo5ksQAo+Y/Gvm/tXt2a4ueJOdcg7oOdxc53R51y1czOIevpYrWJvbwibdWbIndm4jkk48M9Wzz15Vr7Gtn2/2ihlgWGKEpht5nZt5jjOh+ea1c1KZxg6iazfMTl5SlK24FKUoFKUoFKUoFKUoOqWm0JtqQlbZmtJ1BJRF3YJPEkOoyreprE2EQ2XKZLq5YzYw9tH3ywP2ZWbuga9DzrJ7Q2fdbSjEtrLLEuga2lzGi9WjIwrr4+Jqx/iWzZBFBfSfESx5UXG6yoMfVjkYd91B8aiPbTa0c8f/AMcsNpc65iKAu+df2UreXhgHpUCzgvYJBc3d4bYjXDnflYeIEI8D54FVbVO043EMEKRo4zG1mg3XH3hMMsfcjzq+8Nm6pHtSdfiAQA8LbzhfuzsAV5+PMZNBfg2rsy4dzbQwwXJOUa5XMbn+EA7sbMfA5586i7m2xNvzS/DLEfruRHCPJVXRwegBqLtm4ksWCwWUMat+7uP8wXB5MkjaajoKn2U0zwkbXI+HOTG0pxcKesKgb2D0IxQXRLsa4lOFQ3JUayb0VrI/iQASVz5nFWI77bcVxwooViC6mNIwsBXllmzgrjx3qsXmzLW2hE9tbfGx41mkfKoejwpgr/uqvYW3ry6VopollssYcDEMcQGcFHGApH3dc0EqTYOy55SUkHHxlrWKUCNn8Vjmcfh+NR7PtZd28otYrHcUHBtzvvIc6ZDnVTjxAqxL2bskR54Wlv0Rj3YiF3McjLjL4/iAxVVl25eX/p5YyImUIrQFjcJ0w7Es46qTrj2oJV72MhklaVbiTO6He30luk6rkNg4011PlVuDtzDGUie2eWOM4352DXCaYymVwMfdOag3nY17VjNJdLHEpG7KocyZOq5Re8j/AMxGDU1e1thI6ieBpmGQLuREMgJ5M0a6OBj7WTRUfafZq8mYXcVzxoWBYXEjcMxgcw4+yRkfV0qVNt+z3VjvH+PcY/aIm4VA8OKTl/cD1rHbVk2jBILtbkzxnRZozmPH3GTknTcIHOrO/ZX2MqtpceJX/LuepA/dn00qDctibdmt34ttw5bEaNHEu60QPNnXVs45knXyroYmYjCd44znwx4H5Yr58mtbvZ84Pfhf7Dqe6wPirDR1PvXYPo87RvewkHdEsZAcAYBGO6wHppp41JjHBzDPSo+7kgnOhr2PfxjB10q7xXUlHAw2cYqJYXEzF95QhViNeRAPdOfMY/GtxLKqHeAbQ8uX8pq5xGbhaY8M+4ol2AWDanXQDqMVDjnlwpGMAnGfn4eNbrXOJZniWUjxvYBz3j+GlXNn30clzLGurRFA58AdzIA9tferfdWQ4jOSxLa5XJ1YjPLXXSsnZWke+7IV1PeA0IJAzvdTUxiP213c/hrP0p3sUdmiO4QyygAnPJcluX61rhfa0wcYcBgVCjJHXXPr4a1vn/5A3mZrWHP1I2cjoZGwNPDRa5KxrFq+7LvTVxpengJqmlKrkUpSgUpSgUpSgUpSgUpSg2i5a8aRZRdGVlIKssneUjkQpxithuLjZ07F3iUXQQZaYGKGVvElUJw3Lnoa1DaOzZYDiTdz4YbOfQjSoi3rj7R/L5cq5+52n0542bf2f7S3Ujm1aJWtmBV4osRqgzrIj50I6k4OKs7Q7L2dupnaaS5g3iF4CjAx4SuSd0+xrWTdZ5hT7VftdpPGGCEoHGGCsQGHQjkflWu5iaR8s9srtuYN2KC1UQb2sZZnkJOmVc/VfoQOdXds9kCxNz8QRCyh2MwZrhM/ZdBk+jZANa3YbRaAloiUJGN4BSQPIsuV9Rg17Z7Tkik4scjq/i2c56hs/WB6GmU7WQ2dtuCzYvaiR5MY35DuIdMEGJPrrz+sfasxNG214g0WYZYgN6E922bX60R5K+v1T10NazPtFHm4zQx58UCkIT1Kg/hyr3aO1pJsB5DujkijcRemFXA9+dXMHbLI29tDYS70l1Jx0P7u2BUg/daR8DHkAfespH2nguS6KFsJn5TqAQ/huysACmee8unlWuX+2WmjWOXDlNFkK/tMeClxqw9c+tY4tHnRamTsZcT32zpiG0L/AFg3fjmU+J8HB68/SpHwFpe62xFvcHnbu37N/wD6ZDyP8DfOsQ205DGISxManKoTkKT06e1WVYdAPamV7UzZ20rqzkZUyp1WSNhvI2OaunI1PvobWVeLEjW8hYb0B70ep1aNuYH8J9qxkbdSfbSs9Z3NjHGS0Ykl8CzOR5ZXQV0rSbfYxWEfZ20JYkMLMJYP+0+q651Uk5U+lS+x+1PgrxWI3YpO64zyVz3Wyee6SD6A1r15fbzEhVUdFGg9AaRpJKMkjGManJ8q5Tt5dIiJnFYfQ1wEQKwO+3kc6eBNW7wO0uQ2F56cs9COn9jWE+jfayTxYbdLwkRyY5EYwj/IfMGtseDAdMajx/pSs/LhbaWLC5BP2l0P69qirb4Ru8dZH/8AYE9eprI93UY1Yfr8vlVraMsad0uqjIJBIHIYPM+9doxs54ndZ2VAVurtichmjxn/AOlAfxP9a2Sytdwvrzdjy6978+dYR9q2Kvn4qHLKuRxFznAGuvlWzWk0UhzHIjjOpVg3M+R051raExPl8/fTTccTakgDb3DREPkVBJB8xmtBZa23tLdcW7uJDrvTSaj+YjINYa/hLAEKOWuBgnzIGnyrz98ZxL3X6a9a5jeGJpVZWqTW3meUpSgUpSgUpSgUpSgUpSgnHabsAH7+OW9zHkG51djNsw73EQ9Rhh+ODWMr3NEwywhjBUcYOmdQMqdeejf3rIy7OsSoKSTqehVXH4NWsZoGoMleW6qcRlmHUqQT54qylpK3KNj6CowmbqfnVRuG+83zNJwJo2XP9pCo8Scf0Jq1FaliQGXT7xA/4qIZD1PzrzepsMl/hrf9yL/zFWprcL9tW/lOahb1N6rsKyauQvj9f0qxvUzUGetRa4y7MdOn5E1i7yZSx3AVXOgznT+9RM0JqRGHS1u6IhXmvRMRoKtUq4ZiZjhtP0e7fFpdqztiKQbknQA6hvY4+ZrctvfSfK5YWcaqETWWTUkLgHdTl4jGda5MtdD7G/R/dyrxpCsUbxuFDjLEOCAceGuuvSpiEy1PaXaa9nJMtxK2fDeKj5LpWKZsnJOT512ey+i2xjGZWklPmd1fYLr+NZq07M2EX1LaLTquT821rvXRmznbUiHz6tdk2ooGxLG5iwsyMq8RButggqASPPdHtXQLCxg5CGP/AMF8vKswdnW8kZieJGjOpTAx1Bx186ltKapF8vkpblgSepya2nZmwLiaDjLug+CE4Yj7wzp+I5Va+k3YcdltCWGIFY8KyAnOAy5IydSM5rFbJ7QTwEYO8o+yfy6VymlZ5eqnUalIxC5tDZpVirqUfzGAfb86xEsDKcEVn9vdqZLndXG6ichgEk8iSeftVGzLOS6bcjUMcFsZxy56nlzFYxNZxG8O0RTVjM7S14ivKyV9s542KlSpHNWGCPnUFlrUTl57Umq3SvcV5VYKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQVKa+mtk3Ye3gfOjxRn/0XpXzIK7l2E2nxNnQZOsYMZH8hO7/6laRyktqlnFQWuBUaW486jG41r6ujTLx6lsNl2fcgn9achWdtp/xrSrOZRyrPWN0SP15VrV0fLnTV3co+n+AC9ik+/CB/4s3965fXRvpv2gJb2NAf3cQz6sS39MVzivl3jFsPoV4eg1luzm2WtZd8eIwcdOdYivQazE4nKusW21rO+TdlUHz5MvvzFYTbfYhwN+3PFXoPrj2+17a+VaNFMynKkg9RW2bA7ZvGQJD/ALh+YrU9tvstb2ptzDE29jCQyys0T57rEZQfwyKO8vqM8+VQ9obLlh1Ze6fqup3kbzVl0PpzrqjpZX65cAORpImA3v4MPWtT7Qdkbq3Q7rGSHOSUOnkWTOh86xMTXluIrf6f8aSRXlSJICPSrBFSJYmsxy8pSlVClKUClKUClKUClKUClKUClKUClKUClKUClKUCtu7A9ohbSNHIcRSc88lYcm9+Xy6VqNeg0HZ57wZ1OvzqlLnlXLLHbM0eAGyo5A8h5Cs5bdrgProc+VfU6bqKRGLbPFraN5n2uhxXGPGr9/2hS2iMrnlyHix8AK51L20H2YznzOla5tPas07b0jZ6DwHoK6a/V0iPbuxpdNbObLe1b555Xlc5Z2JP5D0HL2qHQmvK+RM5nMvoFKUqBXorylBO2ftGWE5jbHUeFb/2b7cqcLId0+f1T71zKqga1FpSYy7HtLs1Z3gLJiGU+Kjusf4lGnuNa5htDZ+67KCDukjI1U40yDV7Y/aSeDIB3lxjBPL0PhVPZ+yknkEauF0JJbkAMa48TqKzaP6u2leONThi2iOcY1qgxkaEEEeHjXR5vo+JXMdwjH7rKVz6HJx7ite2lDJEeFeQk45MNHHh3Wxhx5Hy1FTeOSaVn6Jy1jdpWVbZUZ1W5ix4b+8re6hTg+5pV2Y7Z+GL4Rr3hHpSlGThHpThHpSlB5wj0oIjSlB7wj0pwj0pSgcI9KcI9KUoHCPSnCPSlKBwj0pwj0pSgcI9KcI9KUoHCPSnCPSlKBwj0pwj0pSgcI9K84R6V7SgcI9KcI9KUoHCPSnCPSlKBwj0pwj0pSgcI9KcI9KUoHCPSrkRdSCCQR4g4NKUG17E7YSR4WUEj7w5+4rfYL2G6iAkQSRt94fjryrylda77S52jG8MTN2BtmJKzSqDyXQ49zqa8pStenVv1b/L/9k="
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
      <div class="navbar navbar-inverse navbar-fixed-bottom">
      <div class="container">
        <p class="navbar-text">2020@TRADEMARK</p>

<ul className="tg-socialicons">
        <li><a href="#"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
      </ul>
      </div>
    </div>
<footer id="tg-footer" className="tg-footer tg-haslayout">
        <div className="tg-haslayout tg-footerinfobox">
          <div className="tg-bgboxone" />
          <div className="tg-bgboxtwo" />
          <div className="tg-footerinfo">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="tg-footercol">
                    <div className="tg-posttitle">
                      <div>
                      <h3>signup newsletter</h3>
                      </div>
                    </div>
                    <div className="tg-description">
                      <p>Adipisicing elit, sed do eiusmod tempor incidunta utiai labore et dolore magna si aliqua quis.</p>
                    </div>
                    <form className="tg-form-newsletter">
                      <fieldset>
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" placeholder="Email" />
                        </div>
                        <button className="tg-btn" type="submit">signup</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
                 {/*<div class="col-sm-4">
								/*<div class="tg-footercol">
									<div class="tg-posttitle">
										<h3>Top products</h3>
									</div>
									<div class="tg-toprated">
										<ul>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-04.jpg" alt="image description">
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-05.jpg" alt="image description">
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-06.jpg" alt="image description">
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-07.jpg" alt="image description">
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							---*/
              }
                {/*use for footer bar%%%%%%%%%%%%%%55
							<div class="col-sm-4">
								<div class="tg-footercol">
									<div class="tg-haslayout">
										<strong class="tg-logo">
											<a href="#">
												<img src="images/logo2.png" alt="image description">
											</a>
										</strong>
									</div>
									<div class="tg-description">
										<p>Consectetur adipisicing elit sedtado eiusmod dunt ut labore et dolore magna aliqua enim minim veniami quis nostrud.</p>
									</div>
									<ul class="tg-contactinfo">
										<li>
											<i class="fa fa-home"></i>
											<address>123 Eccles Old Road, New Salford Road London, Uk, M6 7AF</address>
										</li>
										<li>
											<i class="fa fa-envelope-o"></i>
											<a href="info%40domain.html">info@domain.com</a>
										</li>
										<li>
											<i class="fa fa-phone"></i>
											<span>+44 123 456 788 - 9</span>
										</li>
									</ul>
									<div class="tg-haslayout">
										<a class="tg-btn" href="#">read more</a>
									</div>
								</div>
							</div>
						        */}
              </div>
            </div>
          </div>
        </div>
        {/*<div class="tg-footerbar">
				<div class="container">
					<span class="tg-copyright">
						<!--<a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
						*/}
        {/*<nav class="tg-footernav">
												<div class="footer-left">
 
													<!--<h3>WebDev<span>Trick</span></h3>*/}
        {/*<p class="tg-logo">
														<a href="#">
															<img src="images/Mountain House Tracy Tennis Foundation FF-01.png" alt="image description">
														</a>
													</p>
													
											 
													<span class="footer-company-name">info&copy;mhttf.org</span>
													<div class="footer-icons">
											 
														<a href="#"><i class="fa fa-facebook"></i></a>
														<a href="#"><i class="fa fa-twitter"></i></a>
														<a href="#"><i class="fa fa-linkedin"></i></a>
														<a href="#"><i class="fa fa-github"></i></a>
														
														</div>
													</div>
											 
													<div class="footer-center">
											 
													<div>
													<i class="fa fa-map-marker"></i>
													<p><span>21 Revolution Street</span> Delhi, India</p>
													</div>
											 
													<div>
													<i class="fa fa-phone"></i>
													<p>+1 555 123456</p>
													</div>
											        1
													
													<i class="fa fa-envelope"></i>
													<p><a href="mailto:support@company.com">info@mhttf.org</a></p>
													
													    
													
													
											 
													</div>
											 
													
											 
													</div>
											 
													
													<nav class="tg-footerbar">
														<ul>
															<li><a href="#">2020@TRADEMARK</a></li>
															<li><a href="#">PRIVACY POLICY</a></li>
															<li><a href="#">TERMS OF USE</a></li>
															
														</ul>
													</nav>	 
                           
						<!--<ul>
							<div class=a justify-left>
							<li><a href="#">2020@TRADEMARK</a></li>
							</div>
							<li><a href="#">PRIVACYPOliCY</a></li>
							<li><a href="#>">TERMS OF USE</a></li>*/}
        {/*</ul>
					</nav>
		     3		
		 	4
		</footer>
		<!--************************************
				Footer End
		**************************************/}
        {/*</div>
	<!--************************************
			Wrapper End
	**************************************/}
        {/*************************************
			Search Start
	**************************************/}
        <footer>
          <div className="tg-footerbar">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="tg-footercol">
                    <div className="tg-posttitle">
                      <h2>indo@mhhtf.org</h2>
                      <SocialIcon url="http://linkedin.com/in/jaketrent"style={{ height: 25, width: 25 }} />
                      <SocialIcon url="http://jaketrent.com" network="tumblr"style={{ height: 25, width: 25 }} />
                      <SocialIcon network="facebook" fgColor="#ff5a01" style={{ height: 25, width: 25 }}/>
                      <SocialIcon network="twitter" bgColor="#ff5a01" style={{ height: 25, width: 25 }}/>
                    </div>
                    <div className="tg-description">
                      <ul className="tg-socialicons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="tg-footercol">
                    <div className="tg-posttitle">
                      <h3>Tracy</h3>
                    </div>
                    <div className="tg-toprated">
                      <div className="widget">
                        <div className="left-panel panel">
                          <div className="date">
                            Monday, 20 Aug 2018
                          </div>
                          <div className="city">
                            London
                          </div>
                          <div className="temp">
                            <img src="https://s5.postimg.cc/yzcm7htyb/image.png" alt="" width={60} />
                            27°
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="tg-footercol">
                    <div className="tg-haslayout">
                      <strong className="tg-logo">
                        <a href="#">
                          <img src="images/Mountain House Tracy Tennis Foundation FF-01.png" alt="image description" />
                        </a>
                      </strong>
                    </div>
                    <ul className="tg-contactinfo">
                      <li>
                        <i className="fa fa-home" />
                        <address>123 Eccles Old Road, New Salford Road London, Uk, M6 7AF</address>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o" />
                        <a href="info%40domain.html">info@domain.com</a>
                      </li>
                      <li>
                        <i className="fa fa-phone" />
                        <span>+44 123 456 788 - 9</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            --</div>
        </footer>
      </footer>
    </div>
  );
};
