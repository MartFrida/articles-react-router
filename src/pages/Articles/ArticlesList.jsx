import { useState, useEffect } from "react"
import { fetchAllArticles } from '../../configAxios/api.js'

const ArticlesList = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { result, total } = await fetchAllArticles()
        setArticles(result)
        console.log(total)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchArticles()

  }, [])

  return (
    <ul>
      {articles?.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  )

}

export default ArticlesList