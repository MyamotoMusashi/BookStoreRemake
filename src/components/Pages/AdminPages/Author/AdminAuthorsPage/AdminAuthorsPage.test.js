import { screen, render, waitFor } from "@testing-library/react"
import AdminAuthorsPage from "./AdminAuthorsPage"
import { BrowserRouter } from "react-router-dom"

test("subnavigation renders correctly", (async () => {
    render(<BrowserRouter>
        <AdminAuthorsPage />
    </BrowserRouter>)

    await waitFor(() => {
        let subNavigationWrapper = screen.getByTestId("subnavigation-wrapper")
        expect(subNavigationWrapper).toHaveClass("row")
        expect(subNavigationWrapper.nodeName.toLowerCase()).toBe("div")

        let subNavigation = screen.getByTestId("subnavigation")
        expect(subNavigation).toHaveClass("home-page-subnavigation home-page-subnavigation-pills row")
        expect(subNavigation.nodeName.toLowerCase()).toBe("div")

        let subNavigationItem  = screen.getByTestId("subnavigation-add-author-item")
        expect(subNavigationItem).toHaveClass("nav-item col-md-2")
        expect(subNavigationItem.nodeName.toLowerCase()).toBe("div")

        let subNavigationLink = screen.getByTestId("subnavigation-add-author-link")
        expect(subNavigationLink).toHaveClass("tag-btn-link")
        expect(subNavigationLink).toHaveAttribute("href", "/admin/authors/add")
        expect(subNavigationLink).toHaveAttribute("text", "Add Author")
        expect(subNavigationLink).toHaveTextContent("Add Author")
        expect(subNavigationLink.nodeName.toLowerCase()).toBe("a")
    })
}))