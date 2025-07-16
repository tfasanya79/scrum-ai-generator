from pydantic import BaseModel, Field

class ProjectRequest(BaseModel):
    projectName: str = Field(..., alias="projectName")
    projectGoal: str = Field(..., alias="projectGoal")
    projectDescription: str = Field(..., alias="projectDescription")

    class Config:
        allow_population_by_field_name = True

class ProjectResponse(BaseModel):
    design: str
