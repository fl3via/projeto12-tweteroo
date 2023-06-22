import express from 'express'

const app = express();

app.get("/tweets", (req, res) => {
    const tweets = [
        {
            username: "bobesponja",
            avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
            tweet: "Eu amo hambúrguer de siri!"
        },
    ]

    res.send(tweets)
})


app.listen(5000, () => console.log("servidor esta rodando na porta 5000"))