import { screen, render, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AdminBooks from "./AdminBooksPage"

test("subnavigation renders correctly", (async () => {
    render(<BrowserRouter>
        <AdminBooks/>
    </BrowserRouter>)

    await waitFor(() => {
        let subNavigationWrapper = screen.getByTestId("subnavigation-wrapper")
        expect(subNavigationWrapper).toHaveClass("row")
        expect(subNavigationWrapper.nodeName.toLowerCase()).toBe("div")

        let subNavigation = screen.getByTestId("subnavigation")
        expect(subNavigation).toHaveClass("home-page-subnavigation home-page-subnavigation-pills row")
        expect(subNavigation.nodeName.toLowerCase()).toBe("div")
        expect(subNavigation.childElementCount).toBe(2)

        let subNavigationAddBookItem = screen.getByTestId("subnavigation").firstChild
        expect(subNavigationAddBookItem).toHaveClass("nav-item col-md-2")
        expect(subNavigationAddBookItem.nodeName.toLowerCase()).toBe("div")
        
        let subNavigationAddBookItemLink = screen.getByTestId("subnavigation").firstChild.firstChild
        expect(subNavigationAddBookItemLink).toHaveClass("tag-btn-link")
        expect(subNavigationAddBookItemLink).toHaveAttribute("href", "/admin/books/add")
        expect(subNavigationAddBookItemLink).toHaveTextContent("Add Book")
        expect(subNavigationAddBookItemLink.nodeName.toLowerCase()).toBe("a")

        let subNavigationSearchBooksItem = screen.getByTestId("subnavigation-search-books-item")
        expect(subNavigationSearchBooksItem).toHaveClass("nav-item col-md-2")
        expect(subNavigationSearchBooksItem.nodeName.toLowerCase()).toBe("div")
        expect(subNavigationSearchBooksItem.childElementCount).toBe(2)

        let subNavigationSearchBooksItemInput = screen.getByTestId("subnavigation-search-books-item-input")
        expect(subNavigationSearchBooksItemInput).toHaveAttribute("type", "text")
        expect(subNavigationSearchBooksItemInput).toHaveAttribute("placeholder", "Search Books")
        expect(subNavigationSearchBooksItemInput.nodeName.toLowerCase()).toBe("input")

        let subNavigationSearchBooksItemLink = screen.getByTestId("subnavigation-search-books-item-link")
        expect(subNavigationSearchBooksItemLink).toHaveClass("tag-btn")
        expect(subNavigationSearchBooksItemLink).toHaveAttribute("data-rr-ui-event-key", "Completed")
        expect(subNavigationSearchBooksItemLink).toHaveAttribute("href", "/orders?status=Completed")
        expect(subNavigationSearchBooksItemLink).toHaveAttribute("text", "Search")
        expect(subNavigationSearchBooksItemLink).toHaveTextContent("Search")
        expect(subNavigationSearchBooksItemLink.nodeName.toLowerCase()).toBe("a")
        
    })
}))