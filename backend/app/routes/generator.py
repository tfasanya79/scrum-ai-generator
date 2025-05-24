from fastapi import APIRouter
from app.models.schemas import ProjectInput, ProjectOutput

router = APIRouter()


@router.post("/generate", response_model=ProjectOutput)
async def generate_project(data: ProjectInput):
    # Placeholder response
    return {
        "epics": ["Epic 1", "Epic 2"],
        "sprints": ["Sprint 1", "Sprint 2"],
        "roles": ["Scrum Master", "Product Owner"],
    }
