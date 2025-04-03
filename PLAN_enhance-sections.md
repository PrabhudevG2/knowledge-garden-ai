# Plan: Enhance Website Sections with Detail Pages

**Goal:** Make the sub-topic items within the "Core Technologies", "Frameworks", "Use Cases", and "Future" sections clickable, leading to new detail pages with automatically generated basic content, consistent layout, and nested URLs.

**Plan Steps:**

1.  **Modify Data Structure (`src/lib/data.ts`):**
    *   Add a `slug` field to the item interface within `ContentSection`.
    *   Populate `slug` for items in relevant sections (e.g., "Foundation Models" -> "foundation-models").

2.  **Create Generic Detail Page Component (`src/pages/DetailPage.tsx` - New File):**
    *   Create a `DetailPage` component.
    *   Use `useParams` to get `sectionId` and `itemSlug`.
    *   Fetch data from `src/lib/data.ts` based on params.
    *   Include `Header` and `Footer`.
    *   Display `item.title` and `item.description`.
    *   Generate basic placeholder content automatically.
    *   Apply consistent styling.

3.  **Update Routing (`src/App.tsx`):**
    *   Import `DetailPage`.
    *   Add a dynamic route: `<Route path="/:sectionId/:itemSlug" element={<DetailPage />} />` before the catch-all route.

4.  **Update Section Page Components (e.g., `src/pages/CoreTechnologies.tsx`):**
    *   Modify `CoreTechnologies.tsx`, `Frameworks.tsx`, `UseCases.tsx`, `Future.tsx`.
    *   Import `Link` from `react-router-dom`.
    *   Wrap item cards with `<Link to={\`/${section.id}/${item.slug}\`}>`.

**Visual Flow (Mermaid Diagram):**

```mermaid
graph TD
    subgraph User Interaction
        A[User Views Section Page (e.g., /core-technologies)] --> B{Clicks Item Card (e.g., Foundation Models)};
    end

    subgraph Routing & Rendering
        B -- Triggers Link --> C{React Router Matches /:sectionId/:itemSlug};
        C --> D[Renders DetailPage Component];
        D -- Uses useParams --> E{Extracts sectionId='core-technologies', itemSlug='foundation-models'};
        E --> F{Finds Data in src/lib/data.ts};
        F -- Item Data --> D;
        D -- Generates Placeholder Content --> G[Renders Detail Page UI];
    end

    subgraph Code Changes
        H[Modify src/lib/data.ts: Add slugs]
        I[Create src/pages/DetailPage.tsx]
        J[Modify src/App.tsx: Add route]
        K[Modify Section Pages (CoreTech, Frameworks, etc.): Add Links]
    end

    F --> H;
    D --> I;
    C --> J;
    B --> K;
```

**Summary:**

This plan involves modifying the data structure, creating a new reusable component for detail pages, updating the application's routing, and linking the existing item cards to these new pages. The content for the detail pages will be basic and generated automatically for now.