
exports.createPages = ({ actions }) => {
    actions.createRedirect({
        fromPath: `/`,
        toPath: `/en`,
        isPermanent: `true`,
        redirectInBrowser: true
    })
}
