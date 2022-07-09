import * as React from "react"
import { Link } from "gatsby"
import { Container, Themed, Link as TLink } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-emma/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emma/src/components/seo"

const NotFound = () => (
  <Layout>
    <Seo title="404 - Not found" />
    <Container>
      <Themed.p>
        ¡Oh, no!
        <br />
        La página que buscas no existe.{` `}
        <TLink as={Link} to="/">
          ¿Quieres volver al inicio?
        </TLink>
      </Themed.p>
    </Container>
  </Layout>
)

export default NotFound
