from pydantic import BaseModel
from typing import List


class ProjectInput(BaseModel):
    name: str
    goal: str
    description: str


class ProjectOutput(BaseModel):
    epics: List[str]
    sprints: List[str]
    roles: List[str]
