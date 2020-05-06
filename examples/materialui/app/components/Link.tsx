// Adapted from https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/Link.js

import React from "react"
import clsx from "clsx"
import { useRouter } from "next/router"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link"
import { UrlObject } from "url"

interface NextComposedProps extends NextLinkProps {
  className?: string
}

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>(
  ({ as, href, children, ...rest }, ref) => {
    return (
      <NextLink href={href} as={as}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </NextLink>
    )
  }
)

interface LinkProps extends MuiLinkProps {
  naked?: boolean
  activeClassName?: string
  className?: string
  href: string | (string & UrlObject)
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = ({ href, activeClassName = "active", className: classNameProps, innerRef, naked, ...rest }) => {
  const router = useRouter()
  const pathname = typeof href === "string" ? href : href.pathname

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  })

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...rest} />
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} href={href} {...rest} />
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props: any, ref) => (
  <Link {...props} innerRef={ref} />
))
