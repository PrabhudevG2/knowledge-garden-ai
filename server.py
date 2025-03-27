
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os

app = FastAPI(title="AI Agents Guide")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Mount static files
if os.path.exists("dist"):
    app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")
else:
    print("Warning: 'dist' directory doesn't exist. Run 'npm run build' first.")

templates = Jinja2Templates(directory="dist")

@app.get("/{full_path:path}")
async def serve_spa(request: Request, full_path: str = ""):
    """Serve the SPA for any path."""
    if os.path.exists("dist"):
        return templates.TemplateResponse("index.html", {"request": request})
    else:
        return {"error": "Application not built", "message": "Run 'npm run build' first"}

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}

if __name__ == "__main__":
    print("Starting FastAPI server...")
    print("Access the app at http://localhost:8000")
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
