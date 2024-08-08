/app
  /(site)                         # Root layout and pages
    /page.tsx                     # Landing page or home page
    /login
      /page.tsx                   # User login page
    /register
      /page.tsx                   # Registration page
    /dashboard
      /layout.tsx                 # Dashboard layout
      /page.tsx                   # Main dashboard page
      /curriculum-design
        /page.tsx                 # Dynamic curriculum design tool
      /resources
        /page.tsx                 # Resources access page
      /collaborate
        /page.tsx                 # Collaboration page
      /restructure
        /page.tsx                 # Curriculum restructuring page
      /define-cos-pos
        /page.tsx                 # Define new COs/POs page
      /add-update-resources
        /page.tsx                 # Add/update resources page
      /final-submit
        /page.tsx                 # Final design submission page

  /components                     # Reusable React components
    /AuthButton.tsx               # Authentication-related components
    /Navbar.tsx                   # Navigation bar
    /Sidebar.tsx                  # Sidebar for dashboard navigation
    /ResourceList.tsx             # Component to display resources

  /lib                            # Utility functions, API calls
    /auth.ts                      # Authentication functions
    /database.ts                  # Database access functions
    /curriculum.ts                # Curriculum-related utility functions

  /styles                         # Global and component-specific styles
    /globals.css                  # Global styles
    /dashboard.module.css         # Styles specific to the dashboard

  /public                         # Static assets
    /images                       # Images, icons
      /logo.png                   # Logo image

  /api                            # API routes
    /auth
      /register.ts                # API for user registration
      /login.ts                   # API for user login
    /curriculum
      /submit.ts                  # API for final curriculum submission
    /resources
      /fetch.ts                   # API to fetch resources
