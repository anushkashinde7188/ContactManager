type PageProps = { params: { id: string } };

export default function EditContactPage({ params }: PageProps) {
    const { id } = params;

    return (
        <div>
            <h1>Edit Contact {id}</h1>
        </div>
    );
}

