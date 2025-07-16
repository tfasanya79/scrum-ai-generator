from fastapi import APIRouter, HTTPException
from app.models.schemas import ProjectRequest, ProjectResponse
from app.services.ai_service import generate_scrum_design

router = APIRouter()

@router.post("/generate", response_model=ProjectResponse)
async def generate_project(request: ProjectRequest):
    try:
        result = await generate_scrum_design(request)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
