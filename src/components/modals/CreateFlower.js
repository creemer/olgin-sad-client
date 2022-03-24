import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createFlower} from "../../http/flowerAPI";
import {observer} from "mobx-react-lite";
import {FLOWER_CATEGORIES} from '../../utils/consts';

const CreateFlower = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addFlower = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('img', file)
        createFlower(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Цветок
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="form.flowerName">
                        <Form.Label>Название цветка</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-3"
                            placeholder="Введите название цветка"
                        />
                    </Form.Group>
                    <Form.Group controlId="form.flowerPrice">
                        <Form.Label>Стоимость цветка</Form.Label>
                        <Form.Control
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                            className="mt-3"
                            placeholder="Введите стоимость цветка"
                            type="number"
                        />
                    </Form.Group>
                    <Form.Group controlId="form.flowerCategory">
                        <Form.Label>Категория цветка</Form.Label>
                        <Form.Select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className="mt-3"
                            placeholder="Выберети категорию"
                        >
                            <option value={FLOWER_CATEGORIES.metel}>Метельчатые</option>
                            <option value={FLOWER_CATEGORIES.krupnoList}>Крупнолистные</option>
                            <option value={FLOWER_CATEGORIES.other}>Другие</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="form.flowerDescription">
                        <Form.Label>Описание цветка</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Введите описание цветка"
                        />
                    </Form.Group>
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addFlower}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateFlower;
