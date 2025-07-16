import os
from openai import AsyncOpenAI
from app.models.schemas import ProjectRequest, ProjectResponse
from dotenv import load_dotenv

load_dotenv()

client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

async def generate_scrum_design(project: ProjectRequest) -> ProjectResponse:
    prompt = f"""
You are an expert Agile Scrum Master and Software Architect.
Generate a complete agile project design plan with the following inputs:

- Project Name: {project.name}
- Project Goal: {project.goal}
- Description: {project.description}

Return it as a structured report including: 
1. Epic and User Story breakdown
2. Sprint Planning (2 sprints)
3. Roles and team structure
4. Acceptance Criteria
5. Technologies suggestion (backend, frontend, DB)
6. Agile ceremonies (standups, grooming, planning)
    """

    response = await client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    output = response.choices[0].message.content
    return ProjectResponse(design=output)
